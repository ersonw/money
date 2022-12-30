import Background from "@/components/Background";
import React, {useState} from "react";
import Footer from "@/components/Layouts/Footer";
import './index.less';
// @ts-ignore
import AntDesign from "react-native-vector-icons/dist/AntDesign";
// @ts-ignore
import Feather from "react-native-vector-icons/dist/Feather";
import defaultAvatar from '@/assets/images/default_avatar.svg';
import {ErrorBlock, Grid} from 'antd-mobile';
import {GridItem} from "antd-mobile/es/components/grid/grid";

import wallet from '@/assets/images/icons/wallet.png';
import mine from '@/assets/images/icons/mine.png';
import information from '@/assets/images/icons/information.png';
import Check from '@/assets/images/icons/Check.png';
import about from '@/assets/images/icons/about.png';
import service from '@/assets/images/icons/service.png';
import question from '@/assets/images/icons/question.png';
import account from '@/assets/images/icons/account.png';
import advertise from '@/assets/images/advertise.png';
import advertise2 from '@/assets/images/advertise2.png';
import useFetchData from "@/utils/useFetchData";
import Question from "@/pages/Question";

const My = (props: { history: any; location: any; match: any; })=>{
    const {history} = props;
    const [hide,setHide] = useState(false);

    const {data,loading, onReload, error, } = useFetchData(`/api/my/get`,{money: 0,balance: 0});
    if (error){
        return <ErrorBlock fullPage />
    }
    const {money,balance} = data;
    // if (!money||!balance){
    //     return <ErrorBlock fullPage />
    // }
    const goSetting = ()=>{
        history.push({pathname: '/setting'});
    };
    const goDetails = ()=>{
        history.push({pathname: '/details'});
    };
    const goOrder = ()=>{
        history.push({pathname: '/order'});
    };
    const goAbout = ()=>{
        history.push({pathname: '/about'});
    };
    const goQuestion = ()=>{
        history.push({pathname: '/question'});
    };
    return (
        <>
            <Background />
            <div className='home-container'>
                <div className='top-bar'>
                    <div className='top-bar-item'>
                        <AntDesign
                            name="customerservice"
                            size={24}
                            color="white"
                        />
                    </div>
                    <div className='top-bar-item'>
                        <AntDesign
                            name="message1"
                            size={24}
                            color="white"
                        />
                    </div>
                </div>
                <div  className="user_avatar">
                    <div  className="van-row">
                        <div className='avatar-nickname'>
                            <div  className="avatar">
                                <img src={defaultAvatar} color='' alt="" />
                            </div>
                            <div  className="nickname">
                                <h3 >18172195974</h3>
                                <span >Hi，下午好！</span>
                            </div>
                        </div>
                        <div onClick={goSetting}>
                            <AntDesign
                                name="setting"
                                size={33}
                                color="white"
                            />
                        </div>
                    </div>
                </div>
                <div  className="preview">
                    <div className='box'>
                        <div  className="name-row">
                            <div className="balance">
                                <div>
                                    账户余额（元)
                                    {hide?(
                                        <Feather
                                            name="eye-off"
                                            size={13}
                                            color="currentColor"
                                            onClick={()=>setHide(false)}
                                        />
                                    ):(
                                        <Feather
                                            name="eye"
                                            size={13}
                                            color="currentColor"
                                            onClick={()=>setHide(true)}
                                        />
                                    )}
                                </div>
                                <div>
                                    {hide?'--.-- ':balance.toLocaleString()}
                                </div>
                            </div>
                            <div className="recent">
                                <span  >最近借款（元）</span>
                                <div>{hide?'--.-- ':money.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="funds">
                    <div  className="title">
                        <div>常用服务</div>
                    </div>
                    <Grid
                        columns={4}
                        className='grid'
                    >
                        <GridItem
                            className='grid-item'
                        >
                            <img src={wallet} alt=''/>
                            <span>钱包提现</span>
                        </GridItem>
                        <GridItem
                            className='grid-item'
                            onClick={goDetails}
                        >
                            <img src={mine} alt=''/>
                            <span>我的资料</span>
                        </GridItem>
                        <GridItem
                            className='grid-item'
                            onClick={goOrder}
                        >
                            <img src={information} alt=''/>
                            <span>借款信息</span>
                        </GridItem>
                        <GridItem
                            className='grid-item'
                        >
                            <img src={Check} alt=''/>
                            <span>查看还款</span>
                        </GridItem>
                        <GridItem
                            className='grid-item'
                            onClick={goSetting}
                        >
                            <img src={account} alt=''/>
                            <span>账号设置</span>
                        </GridItem>
                        <GridItem
                            className='grid-item'
                        >
                            <img src={service} alt=''/>
                            <span>在线客服</span>
                        </GridItem>
                        <GridItem
                            className='grid-item'
                            onClick={goQuestion}
                        >
                            <img src={question} alt=''/>
                            <span>常见问题</span>
                        </GridItem>
                        <GridItem
                            className='grid-item'
                            onClick={goAbout}
                        >
                            <img src={about} alt=''/>
                            <span>关于我们</span>
                        </GridItem>
                    </Grid>
                </div>
                <div className='advertise'>
                    <img src={advertise} alt=''/>
                </div>
                <div className='advertise'>
                    <img src={advertise2} alt=''/>
                </div>
                <Footer/>
            </div>
        </>
    );
};
export default My;