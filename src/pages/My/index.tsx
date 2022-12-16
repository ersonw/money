import Background from "@/components/Background";
import React from "react";
import Footer from "@/components/Layouts/Footer";
import './index.less';
// @ts-ignore
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import defaultAvatar from '@/assets/images/default_avatar.svg';
import { Grid } from 'antd-mobile';
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

const My = (props: { history: any; location: any; match: any; })=>{
    const {history} = props;
    const goSetting = ()=>{
        history.push({pathname: '/setting'});
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
                            <div  className="balance">
                                账户余额（元)
                                <AntDesign
                                    name="eyeo"
                                    size={20}
                                    color="currentColor"
                                />
                            </div>
                            <div  className="recent">最近借款（元）</div>
                        </div>
                        <div  className="value-row">
                            <div  className="balance">0</div>
                            <div  className="recent"> 0</div>
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
                        >
                            <img src={mine} alt=''/>
                            <span>我的资料</span>
                        </GridItem>
                        <GridItem
                            className='grid-item'
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
                        >
                            <img src={question} alt=''/>
                            <span>常见问题</span>
                        </GridItem>
                        <GridItem
                            className='grid-item'
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