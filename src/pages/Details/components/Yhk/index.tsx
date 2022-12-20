import useFetchData from "@/utils/useFetchData";
import React, {useEffect, useState} from "react";
import {Form, Input, List, Toast} from "antd-mobile";
import './index.less';
import MaskLoading from "@/components/MaskLoading";
import http from "@/utils/http";

const Yhk = ({setIndex,}: any) => {
    const {data,onRefresh,refresh,loading, onReload, error, } = useFetchData('/api/details/getYhk',{});
    const [state, setState] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [khh, setKhh] = useState("");
    const [yhk, setYhk] = useState("");
    useEffect(()=>{
        if (!loading){
            const {state,name,phone,khh,yhk,} = data;
            if (state){
                setState(state);
            }
            if (name){
                setName(name);
            }
            if (phone){
                setPhone(phone);
            }
            if (khh){
                setKhh(khh);
            }
            if (yhk){
                setYhk(yhk);
            }
        }
        // return ()=> {
        //     data = {};
        // };
    },[data]);
    // console.log(data);
    const submit = async () => {
        Toast.show({
            icon: 'loading',
            content: '提交中…',
            // duration: 0,
        });
        const data = await http.post(`/api/details/yhk`,{
            phone,khh,yhk
        },);
        const {state} = data;
        if (state){
            setIndex(2);
        }
    };
    return (
        <List className='yhk-body'>
            <Form layout='horizontal'>
                <Form.Item label='真实姓名' name='name'>{name!==''&&(<span></span>)}
                    <Input placeholder='请输入真实姓名' clearable disabled={true} value={name} onChange={setName}/>
                </Form.Item>
                <Form.Item label='预留手机号' name='phone'>
                    {name!==''&&(<span></span>)}
                    <Input placeholder='请输入预留手机号' clearable readOnly={state} value={phone} onChange={setPhone}/>
                </Form.Item>
                <Form.Item label='开户银行' name='khh'>
                    {name!==''&&(<span></span>)}
                    <Input placeholder='请输入开户银行' clearable readOnly={state} value={khh} onChange={setKhh}/>
                </Form.Item>
                <Form.Item label='银行卡号' name='yhk'>
                    {name!==''&&(<span></span>)}
                    <Input placeholder='请输入银行卡号' clearable readOnly={state} value={yhk} onChange={setYhk}/>
                </Form.Item>
            </Form>
            <div className='bnt-yhk'>
                <div
                    // className={`bnt ${state?'adm-tabs-tab-disabled':''}`}
                    className={`bnt-cancel`}
                    onClick={()=>setIndex(0)}
                >
                    上一步
                </div>
                <div
                    // className={`bnt ${state?'adm-tabs-tab-disabled':''}`}
                    className={`bnt`}
                    onClick={submit}
                >
                    提交
                </div>
            </div>
        </List>
    );
};
export default Yhk;