import './index.less';
import {List} from "antd-mobile";
import Auth from "@/utils/auth";
const Setting = (props: { history: any; location: any; match: any; })=>{
    const {history} = props;
    const logout = ()=>{
        Auth.del();
        window.location.reload();
    };

    return (
        <div className='setting-container'>
            <List>
                <List.Item
                    onClick={()=>{
                        history.push({pathname: '/changePassword'});
                    }}
                >
                    修改密码
                </List.Item>
                <List.Item
                    extra={<>v2.1.3</>}
                >
                    版本信息
                </List.Item>
            </List>
            <div className='bnt-logout'>
                <div
                    className='bnt'
                    onClick={logout}
                >
                    退出登录
                </div>
            </div>
        </div>
    );
};
export default Setting;