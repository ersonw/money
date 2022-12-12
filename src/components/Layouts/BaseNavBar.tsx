/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
// @ts-ignore
import {withRouter} from 'react-router-dom'
import "./NavBar.less";
import Auth from "@/utils/auth";
import routes from "@/routes";
import {LeftOutline,SendOutline}  from 'antd-mobile-icons'
import qs from "qs";
import MaskLoading from "@/components/MaskLoading";

const BaseNavBar = (props: { history: any; location: any; match: any; }) =>{

    // console.log(props);
    const {history,location} = props;
    let {pathname,search} = location;

    const [navBarTitle, setNavBarTitle] = useState('');
    const [hiddenNavBar, setHiddenNavBar] = useState(true);
    const [hiddenShare, setHiddenShare] = useState(true);
    const [hiddenBack, setHiddenBack] = useState(true);
    const [hiddenTitle, setHiddenTitle] = useState(true);
    const [loading,setLoading] =useState(false);

    useEffect(() => {
        setLoading(true);
        setHiddenNavBar(true);
        const index = routes.findIndex((route) => route.path === pathname);
        if (index > -1&&(routes[index] as any).header) {
            const { header } = (routes[index] as any);
            if (header){
                setHiddenNavBar(false);
                if (header.title){
                    setNavBarTitle(header.title);
                }
                setHiddenTitle(!header.showTitle);
                setHiddenBack(!header.showBack);
                setHiddenShare(!header.showShare);
            }
        }
        if (pathname==='/login'){
            // setLoading(true);
            if (Auth.get()){
                let surl = '/';
                if (search){
                    const _q = qs.parse(search.substring(1));
                    const { url } = _q;
                    if (url){
                        surl = (url as any)
                    }
                }
                history.push({
                    pathname: surl,
                });
            }
        }else if (!Auth.get()){
            history.push({
                pathname: '/login',
                search: `?url=${pathname}`,
            });
        }
        setTimeout(()=>setLoading(false),500);
        return () => {
            pathname = '';
        };
    }, [pathname]);


    const handleBack = () => {
        history.go(-1);
    }

    const handleShare = () => {
        console.log('share');
    }

    return (
        <>
            {!hiddenNavBar&&(
                <div className="base-nav-none-bar">
                    <div className="base-nav-bar">
                        {hiddenBack?(
                            <div className='base-nav-bar-right-none-btn'></div>
                        ):(
                            <LeftOutline
                                onClick={handleBack}
                            />
                        )}
                        {!hiddenTitle&&(
                            <div className='base-nav-bar-title' > {navBarTitle} </div>
                        )}
                        {hiddenShare?(
                            <div className='base-nav-bar-right-none-btn'></div>
                            ):(
                            <SendOutline
                                onClick={handleShare}
                            />
                        )}
                    </div>
                </div>
            )}
            <MaskLoading loading={loading} />
        </>
    )
}

export default withRouter(BaseNavBar);
