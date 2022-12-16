import {Form, Input, Toast} from "antd-mobile";
import './index.less';
import http from "@/utils/http";
import Auth from "@/utils/auth";
import {useState} from "react";
import {Md5} from "ts-md5";

const ChangePassword = (props: { history: any; location: any; match: any; })=>{
    const {history} = props;
    const [password,setPassword] = useState("");
    const [passwordOld,setPasswordOld] = useState("");
    const changePassword = async ()=>{
        Toast.show({
            icon: 'loading',
            content: '加载中…',
            // duration: 0,
        });

        const data= await http.post(`/api/user/changePassword`,{
            passwordOld: Md5.hashStr(passwordOld),
            password: Md5.hashStr(password),
        });
        if (!data)return;
        const {state} = data;
        if (state){
            // Toast.clear();
            history.push({pathname: '/setting'});
        }
    };
    return (
        <div className='password-container'>
            <Form layout='horizontal'>
                <Form.Item label='旧密码' name='password' >
                    <Input placeholder='请输入旧密码' clearable type='password' value={passwordOld} onChange={setPasswordOld} />
                </Form.Item>
                <Form.Item label='新密码' name='password1'>
                    <Input placeholder='请输入新密码' clearable type='password' value={password} onChange={setPassword} />
                </Form.Item>
            </Form>
            <div className='bnt-password'>
                <div
                    className='bnt'
                    onClick={changePassword}
                >
                    提交
                </div>
            </div>
        </div>
    );
};
export default ChangePassword;