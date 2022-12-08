/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
// @ts-ignore
import {withRouter} from 'react-router-dom'
import "./NavBar.less";
import Auth from "@/utils/auth";

const BaseNavBar = (props: { history: any; location: any; match: any; }) =>{

    console.log(props);
    const {history,location} = props;
    const {state} = location;
    const { title } = state;

    const [navBarTitle, setNavBarTitle] = useState('test')
    const [hiddenNavBar, setHiddenNavBar] = useState(true)
    const [hiddenShare, setHiddenShare] = useState(true)
    const [hiddenTitle, setHiddenTitle] = useState(true)

    let pathName = location.pathname

    const isHiddenNavBar = ['/home',];
    const isHiddenTitle = ['/mine1'];
    const isShowShare = ['/indexDetail'];

    useEffect(()=>{
        setNavBarTitle(title);
    },[title]);
    useEffect(() => {
        if (pathName!=='/login'&&!Auth.get()){
            // history.push('/login',{title: '注册/登录'});
            history.push({
                pathname: '/login',
                search: `?t=${new Date().getTime()}`,
                state: {title: '注册/登录'},
            });
            return ;
        }
        if (!isHiddenNavBar.includes(pathName)) {
            setHiddenNavBar(false);
        }
        if (!isHiddenTitle.includes(pathName)) {
            setHiddenTitle(false);
        }
        if (!isShowShare.includes(pathName)) {
            setHiddenShare(false);
        }
        return () => {
            pathName = ''
        };
    }, [pathName])


    const handleBack = () => {
        history.go(-1);
    }

    const handleShare = () => {
        console.log('share');
    }

    return (
        <div>
            {!hiddenNavBar&&(
                <div className='base-nav-none-bar' style={{display: 'none'}}>
                    <div className='base-nav-bar' style={{display: 'none'}}>
                        <div className='base-nav-bar-left-btn' style={{display: 'none'}} onClick={() => handleBack()}></div>
                        {!hiddenTitle&&(
                            <div className='base-nav-bar-title' style={{display: 'none'}}> {navBarTitle} </div>
                        )}
                        {!hiddenShare&&(
                            <div className='base-nav-bar-right-btn' style={{display: 'none'}}
                                 onClick={() => handleShare()}></div>
                        )}
                        <div className='base-nav-bar-right-none-btn' style={{display: 'none'}}></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default withRouter(BaseNavBar);