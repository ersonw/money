import './index.less';
import React, {useState,} from 'react';

import logo from "@/assets/logo.png";
import {Input} from "antd-mobile/es/components/input/input";
import "antd-mobile/es/components/input/input.css";
import "antd-mobile/es/components/button/button.css";
import {Button} from "antd-mobile/es/components/button/button";
import http from "@/utils/http";
import {Toast} from "antd-mobile";
import Auth from "@/utils/auth";

const countDown=({setCount,setCountTime}: any)=>{
    let countTime = 120;
    const interval = setInterval(()=>{
        if (countTime > 1){
            countTime--;
            setCountTime(countTime);
        }else{
            setCountTime(120);
            setCount(false);
            clearInterval(interval);
        }
    },1000);
}
const Login = (props: any)=>{
    // console.log(props);

    const [username,setUsername] =useState('');
    const [password,setPassword] =useState('');
    const [codeId,setCodeId] =useState('');
    const [usernameError,setUsernameError] =useState(false);
    const [passwordError,setPasswordError] =useState(false);
    const [count,setCount] =useState(false);
    const [countTime,setCountTime] =useState(120);


    const sendSms = async ()=>{
        Toast.show({
            icon: 'loading',
            content: '加载中…',
            // duration: 0,
        });
        const data = await http.get(`/api/login/${username}`);
        if (!data)return;
        const {id,code} = data;

        if (id){
            setCodeId(id);
        }
        if (code){
            setPassword(code);
        }
        setCount(true);
        countDown({setCountTime, setCount});
    };
    const login = async ()=>{
        Toast.show({
            icon: 'loading',
            content: '加载中…',
            // duration: 0,
        });

        const data= await http.post(`/api/login/phone`,{
            codeId: codeId,
            username,
            password,
        });
        if (!data)return;
        const {token} = data;
        if (token){
            Toast.clear();
            Auth.set(token);
            window.location.reload();
        }
    };

    return (
        <div className='container'>
            <div className='logo-box'>
                <img src={logo} width={50} />
                <span>度小满</span>
            </div>
            <div className='form-box'>
                <Input
                    enterKeyHint='next'
                    placeholder='请输入手机号'
                    clearable={true}
                    onlyShowClearWhenFocus={true}
                    disabled={count}
                    value={username}
                    className='form-input'
                    style={{
                        borderBottomColor: usernameError?'red':'#d5dadb',
                    }}
                    onChange={(e)=>{
                        setUsername(e);
                        if (e.length > 9){
                            setUsernameError(false);
                        }else {
                            setUsernameError(true);
                        }
                        // if (!(/^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/).test(e)){
                        //     setUsernameError(true);
                        // }else {
                        //     setUsernameError(false);
                        // }
                    }}
                    onBlur={()=>{
                        if (username.length > 9){
                            setUsernameError(false);
                        }else {
                            setUsernameError(true);
                        }
                        // if (!(/^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/).test(username)){
                        //     setUsernameError(true);
                        // }else {
                        //     setUsernameError(false);
                        // }
                    }}
                />
                <div
                    className='form-input'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}
                >
                    <Input
                        enterKeyHint='done'
                        placeholder='请输入验证码'
                        value={password}
                        style={{
                            borderBottomColor: passwordError?'red':'#d5dadb',
                            width: '50%',
                        }}
                        onChange={(e)=>{
                            setPassword(e);
                            if (e.length > 0){
                                setPasswordError(false);
                            }
                        }}
                        onBlur={()=>{
                            if (password.length !== 6){
                                setPasswordError(true);
                            }else {
                                setPasswordError(false);
                            }
                        }}
                    />
                    <span
                        className='sms-bnt'
                        style={{
                            color: count?'gray':'rgb(255, 68, 0)',
                            borderColor: count?'gray':'rgb(255, 68, 0)',
                            display: usernameError?'none':'',
                        }}
                        onClick={()=>{
                            if (username&&!usernameError&&!count){
                                sendSms();
                                return;
                                // if ((/^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/).test(username)){
                                //     sendSms();
                                //     return;
                                // }
                            }
                            Toast.show({
                                icon: 'fail',
                                content: '手机号码不正确',
                            })
                        }}
                    >{count?`重新发送${countTime}`:'获取验证码'}</span>
                </div>
                <Button
                    className='submit-bnt'
                    onClick={()=>{
                        if (!usernameError&&!passwordError&&codeId){
                            login();
                        }
                    }}
                >登录/注册</Button>
            </div>
        </div>
    );
}
export default Login;
