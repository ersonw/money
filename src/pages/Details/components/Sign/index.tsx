import React, {useEffect, useRef, useState} from "react";
// @ts-ignore
import SignatureCanvas from 'react-signature-canvas';
import './index.less';
import {Toast} from "antd-mobile";
import http from "@/utils/http";
import useFetchData from "@/utils/useFetchData";
const Sign = ({setIndex,history}: any) => {
    const signCanvas = useRef<any>(null);
    const [state, setState] = useState(false);
    const [image, setImage] = useState("");
    const {data,onRefresh,refresh,loading, onReload, error, } = useFetchData('/api/details/getSign',{});
    useEffect(()=>{
        if (!loading){
            const {state,image,} = data;
            if (state){
                setState(state);
            }
            if (image){
                setImage(image);
            }
        }
        // return ()=> {
        //     data = {};
        // };
    },[data]);
    const signBtn = async() =>{
        //得到画布
        let canvas = signCanvas.current._canvas;
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.fillStyle = "#fff";//添加颜色
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }
    const onUpload = async()=>{
        if (state){
            Toast.show({
                icon: 'fail',
                content: '审核状态不可修改哟！',
                // duration: 0,
            });
            return;
        }
        Toast.show({
            icon: 'loading',
            content: '图片上传中…',
            duration: 0,
        });
        const url = await uploadFile().catch(()=>Toast.clear());
        Toast.clear();
        if (url){
            Toast.show({
                icon: 'loading',
                content: '提交中…',
                // duration: 0,
            });
            const data = await http.post(`/api/details/sign`,{url},);
            const {state} = data;
            if (state){
                history.push('/apply');
            }
        }
    };
    const uploadFile = async () => {
        const dataUrl = signCanvas.current.toDataURL("image/png");
        const blob = dataURLtoBlob(dataUrl);
        const file = new File([blob], `${new Date().getTime()}.png`);
        let formdata = new FormData();
        formdata.append('file', file);
        const {url}= await http.post(`/api/upload`,formdata,);
        return url;
    };
    const resetSignBtn = () => {
        setState(false);
        if (!signCanvas) {
            Toast.show('没有可清除的签名.');
            return;
        }
        console.log(signCanvas);
        signCanvas.current.clear();
    }
    const dataURLtoBlob = (data: any) => {
        var arr = data.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
    return (
        <div className='sign-body'>
            {!state&&(
                <SignatureCanvas
                    ref={signCanvas}
                    penColor='#000'
                    canvasProps={{ className: 'canvas', }}
                />
            )}
            {state&&(
                <img
                    className='canvas'
                    src={image}
                />
            )}
            <button
                onClick={resetSignBtn}
            >复位</button>
            <div className='bnt-sign'>
                <div
                    // className={`bnt ${state?'adm-tabs-tab-disabled':''}`}
                    className={`bnt-cancel`}
                    onClick={()=>setIndex(1)}
                >
                    上一步
                </div>
                <div
                    // className={`bnt ${state?'adm-tabs-tab-disabled':''}`}
                    className={`bnt`}
                    onClick={onUpload}
                >
                    提交
                </div>
            </div>
        </div>
    );
};
export default Sign;