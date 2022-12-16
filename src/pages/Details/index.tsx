import './index.less';
import {Tabs} from "antd-mobile";
const Details = ()=>{
    return (
        <div className='details-container'>
            <Tabs>
                <Tabs.Tab title='身份证信息' key='fruits' />
                <Tabs.Tab title='银行卡信息' key='vegetables' />
                <Tabs.Tab title='手写签名' key='animals'  />
            </Tabs>
        </div>
    );
};
export default Details;