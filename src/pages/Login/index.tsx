import './index.less';
import React, {useState, useEffect} from 'react';

import logo from "@/assets/logo.png";
import {Input} from "antd-mobile/es/components/input/input";
import "antd-mobile/es/components/input/input.css";
import "antd-mobile/es/components/button/button.css";
import {Button} from "antd-mobile/es/components/button/button";

const Login = (props: any)=>{
    // console.log(props);
    const [username,setUsername] =useState('');
    const [password,setPassword] =useState('');
    const [usernameError,setUsernameError] =useState(false);
    const [passwordError,setPasswordError] =useState(false);
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
                    value={username}
                    className='form-input'
                    style={{
                        color: usernameError?'red':'#181921',
                    }}
                    onChange={(e)=>{
                        setUsername(e);
                        if (e.length > 0){
                            setUsernameError(false);
                        }
                    }}
                    onBlur={()=>{
                        if (username.length === 0){
                            setUsernameError(true);
                        }else {
                            setUsernameError(false);
                        }
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
                            color: passwordError?'red':'#181921',
                            width: '50%',
                        }}
                        onChange={(e)=>{
                            setPassword(e);
                            if (e.length > 0){
                                setPasswordError(false);
                            }
                        }}
                        onBlur={()=>{
                            if (username.length === 0){
                                setPasswordError(true);
                            }else {
                                setPasswordError(false);
                            }
                        }}
                    />
                    <span className='sms-bnt'>获取验证码</span>
                </div>
                <Button
                    className='submit-bnt'
                >登录/注册</Button>
            </div>
        </div>
    );
}
export default Login;
