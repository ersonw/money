// @ts-ignore
import {withRouter} from 'react-router-dom'
import {Footer} from "antd-mobile";
import './Footer.less';

const BaseFooter = ()=>{
    return (
        <div className='footer'>
            <Footer
                style={{
                    '--background-color': 'rgba(234,234,234,0.01)',
                }}
                label={
                    <div style={{color: "rgba(73,73,73,.7098039215686275)"}}>
                        度小满·让信用不负期待
                    </div>
                }
                // content={`@ 2004-${new Date().getFullYear()} ${window.location.host} All rights reserved`}
                content={<div style={{paddingBottom: '1rem'}}>
                    持牌机构｜1亿+组册用户｜安全备案
                </div>}
            ></Footer>
        </div>
    );
};
export default withRouter(BaseFooter);