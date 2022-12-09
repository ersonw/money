/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
// @ts-ignore
import {withRouter} from 'react-router-dom'
import styles from  "./NavBar.less";
import "./NavBar.less";
import Auth from "@/utils/auth";
import routes from "@/routes";
import {LeftOutline,SendOutline}  from 'antd-mobile-icons'

const BaseNavBar = (props: { history: any; location: any; match: any; }) =>{

    // console.log(props);
    const {history,location} = props;
    let {pathname} = location;

    const [navBarTitle, setNavBarTitle] = useState('')
    const [hiddenNavBar, setHiddenNavBar] = useState(true)
    const [hiddenShare, setHiddenShare] = useState(true)
    const [hiddenBack, setHiddenBack] = useState(true)
    const [hiddenTitle, setHiddenTitle] = useState(true)

    useEffect(() => {
        if (pathname!=='/login'&&!Auth.get()){
            history.push({
                pathname: '/login',
                search: `?t=${new Date().getTime()}`,
            });
            return ;
        }
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
        return () => {
            pathname = '';
        };
    }, [pathname])


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
        </>
    )
}

export default withRouter(BaseNavBar);
