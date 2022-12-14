import './index.less';
import {Form, Input, List, NoticeBar, ImageUploader, ImageUploadItem, Toast, Dialog} from "antd-mobile";
import React, {useEffect, useState} from "react";
// @ts-ignore
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import {CameraOutline} from 'antd-mobile-icons';
import resolve from "resolve";
import http from "@/utils/http";
import {Md5} from "ts-md5";
import useFetchData from "@/utils/useFetchData";
import MaskLoading from "@/components/MaskLoading";

const Sfz = ({setIndex,}: any) => {
    const [state, setState] = useState(false);
    const [name, setName] = useState("");
    const [sfz, setSfz] = useState("");
    const [front, setFront] = useState<ImageUploadItem[]>([]);
    const [hand, setHand] = useState<ImageUploadItem[]>([]);
    const [reverse, setReverse] = useState<ImageUploadItem[]>([]);
    const {data,onRefresh,refresh,loading, onReload, error, } = useFetchData('/api/details/getSfz',{});

    useEffect(()=>{
        if (!loading){
            const {state,name,sfz,front,hand,reverse} = data;
            if (state){
                setState(state);
            }
            if (name){
                setName(name);
            }
            if (sfz){
                setSfz(sfz);
            }
            if (front){
                setFront([{url: front}]);
            }
            if (hand){
                setHand([{url: hand}]);
            }
            if (reverse){
                setReverse([{url: reverse}]);
            }
        }
        // return ()=> {
        //     data = {};
        // };
    },[data]);
    // console.log(data);

    const uploadFile = async (file: File) => {
        // const headers: any['Content-Type'] =  "multipart/form-data;charset=UTF-8";
        let formdata = new FormData();
        formdata.append('file', file);
        const data= await http.post(`/api/upload`,formdata,);
        if (!data)return null;
        const {url} = data;
        if (url) {
            return  {url,}
        }
        return null;
        // return new Promise<ImageUploadItem>((resolve)=>{
        //     setTimeout(()=>{
        //         resolve({
        //             url: URL.createObjectURL(file),
        //         });
        //     },1000*3);
        // });
    };
    const submit = async () => {
        Toast.show({
            icon: 'loading',
            content: '????????????',
            // duration: 0,
        });
        const data = await http.post(`/api/details/sfz`,{
            name,
            sfz,
            front: front[0].url,
            hand: hand[0].url,
            reverse: reverse[0].url,
        },);
        const {state} = data;
        if (state){
            setIndex(1);
        }
    };
    const beforeUpload = (file: File) => {
        if (file.size > 1024 * 1024 * 18) {
            Toast.show('??????????????? 18M ?????????')
            return null;
        }
        return file;
    }
    return (
        <List className='sfz-body'>
            <NoticeBar
                content='??????????????????????????????????????????????????????. '
                style={{
                    color: 'red',
                                                    backgroundColor: 'rgba(227, 227, 227, 0.71)',
                    borderColor: 'rgba(227, 227, 227, 0.71)',
                }}
                icon={<AntDesign name="infocirlceo" color='currentColor' size={15}/>}
            />
            <Form layout='horizontal'>
                <Form.Item label='????????????' name='name'>{name!==''&&(<span></span>)}
                    <Input placeholder='?????????????????????' clearable readOnly={state} value={name} onChange={setName}/>
                </Form.Item>
                <Form.Item label='????????????' name='sfz'>
                    {sfz!==''&&(<span></span>)}
                    <Input placeholder='?????????????????????' clearable readOnly={state} value={sfz} onChange={setSfz}/>
                </Form.Item>
                <Form.Item label='???????????????' name='front'>
                    {front&&(<span></span>)}
                    <ImageUploader
                        upload={uploadFile as any}
                        value={front}
                        onChange={setFront}
                        beforeUpload={beforeUpload}
                        maxCount={1}
                        onCountExceed={exceed => {
                            Toast.show(`???????????? ${1} ???????????????????????? ${exceed} ???`)
                        }}
                        onDelete={() => {
                            return Dialog.confirm({
                                content: '??????????????????',
                            })
                        }}
                        accept="image/jpeg,image/jpg,image/png"
                        disableUpload={state}
                    >
                        <div
                            className='image-picker'
                        >
                            <CameraOutline />
                        </div>
                    </ImageUploader>
                </Form.Item>
                <Form.Item label='???????????????' name='reverse'>
                    {reverse&&(<span></span>)}
                    <ImageUploader
                        upload={uploadFile as any}
                        value={reverse}
                        onChange={setReverse}
                        beforeUpload={beforeUpload}
                        maxCount={1}
                        onCountExceed={exceed => {
                            Toast.show(`???????????? ${1} ???????????????????????? ${exceed} ???`)
                        }}
                        onDelete={() => {
                            return Dialog.confirm({
                                content: '??????????????????',
                            })
                        }}
                        accept="image/jpeg,image/jpg,image/png"
                        disableUpload={state}
                    >
                        <div
                            className='image-picker'
                        >
                            <CameraOutline />
                        </div>
                    </ImageUploader>
                </Form.Item>
                <Form.Item label='???????????????' name='hand'>
                    {hand&&(<span></span>)}
                    <ImageUploader
                        upload={uploadFile as any}
                        value={hand}
                        onChange={setHand}
                        beforeUpload={beforeUpload}
                        maxCount={1}
                        onCountExceed={exceed => {
                            Toast.show(`???????????? ${1} ???????????????????????? ${exceed} ???`)
                        }}
                        onDelete={() => {
                            return Dialog.confirm({
                                content: '??????????????????',
                            })
                        }}
                        accept="image/jpeg,image/jpg,image/png"
                        disableUpload={state}
                    >
                        <div
                            className='image-picker'
                        >
                            <CameraOutline />
                        </div>
                    </ImageUploader>
                </Form.Item>
            </Form>
            <div className='bnt-save'>
                <div
                    // className={`bnt ${state?'adm-tabs-tab-disabled':''}`}
                    className={`bnt`}
                    onClick={submit}
                >
                    ??????
                </div>
            </div>
            {/*<MaskLoading loading={loading||refresh} />*/}
        </List>
    );
};
export default Sfz;