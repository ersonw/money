import {useEffect, useState} from "react";
import routes from "@/routes";
// @ts-ignore
import {withRouter} from 'react-router-dom'
import {Footer} from "antd-mobile";

const BaseFooter = (props: { history: any; location: any; match: any; })=>{
    const {history,location} = props;
    let {pathname,} = location;
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
        setHidden(true);
        const index = routes.findIndex((route) => route.path === pathname);
        if (index > -1&&(routes[index] as any).footer) {
            const { footer } = (routes[index] as any);
            if (footer){
                setHidden(false);
            }
        }
        return () => {
            // pathname = '';
        };
    }, [pathname]);
    // console.log(`BaseFooter:${hidden}`);
    if (hidden){
        return <></>
    }
    return (
        <div className='footer'>
            <Footer
                label={
                    <div style={{color: "gray"}}>
                        我们大家·让信用不负期待
                    </div>
                }
                content={`@ 2004-${new Date().getFullYear()} ${window.location.host} All rights reserved`}
            ></Footer>
        </div>
    );
};
export default withRouter(BaseFooter);