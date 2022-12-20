import React, {useState} from 'react';
// @ts-ignore
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import './index.less';
import {NoticeBar, Swiper} from "antd-mobile";
import {greenPhone,} from "@/utils/PhoneNumber";
import Welfare from '@/assets/images/Welfare.png';
import getting_Started1 from '@/assets/images/getting_Started1.png';
import getting_Started2 from '@/assets/images/getting_Started2.png';
import Footer from "@/components/Layouts/Footer";
import Background from "@/components/Background";

export default function Home(props: { history: any; location: any; match: any; }) {
    const {history, location} = props;
    const phoneArr = greenPhone();
    let items: any[] = [
        {
            img: getting_Started1,
        },
        {
            img: getting_Started2,
        },
    ];

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
                <div className='headline'>
                    <span>度小满</span>
                    <span>  ·让信用不负期待</span>
                </div>
                <div className='loan-limit'>
                    <div className='amount-info'>
                        <span>最高借款额度（元）</span>
                    </div>
                    <div className='amount'>
                        <span>300,000</span>
                        <button
                            className='button'
                            onClick={()=>{
                                history.push({pathname: '/apply'});
                            }}
                        >立即借款
                        </button>
                    </div>
                    <div className='interest'>
                        最低利率
                        <span>0.02%</span>
                        （年化利率
                        <span>0.73%</span>
                    </div>
                </div>
                <div className='notice-bar'>
                    <NoticeBar
                        className='bar-list'
                        content={(
                            <div className='rowup'>
                                {phoneArr && phoneArr.map((value, index) => {
                                    return (<div className='bar-item'>{value}</div>);
                                })}
                            </div>
                        )}
                        color='alert'
                    />
                </div>
                <div className="about-me">
                    <div className="content">
                        <div className="title"><p data-v-bfe91014="">APP专享福利</p></div>
                        <img src={Welfare} alt=""/>
                    </div>
                </div>
                <div className="guide">
                    <div className="title">
                        <p>快速入门</p>
                    </div>
                    <div className="content">
                        <div className="help">
                            <div className="getting_Started">
                                <span> 征信知识 </span>
                            </div>
                            <div className="getting_Started">
                                <span> 热门话题 </span>
                            </div>
                            <div className="getting_Started">
                                <span> 贷款帮帮 </span>
                            </div>
                            <div className="getting_Started">
                                <span> 使用帮助 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='swipe'>
                    <Swiper
                        autoplay={true}
                        loop={true}
                    >{items && items.map((value, index) => {
                        return (
                            <Swiper.Item key={index}>
                                <img src={value.img} draggable={false} alt=''/>
                            </Swiper.Item>
                        );
                    })}</Swiper>
                </div>
                <div className="guide">
                    <div className="title">
                        <p data-v-bfe91014="">新手指南</p>
                    </div>
                    <div className="content">
                        <div className="content-title">
                            <p className="info">度小满新手使用指南</p>
                        </div>
                        <div className="help">
                            <div className="help-item">
                                <span >
                                    <AntDesign
                                        name="right"
                                        size={18}
                                        color="rgb(255, 68, 0)"
                                    />
                                    申请条件
                                </span>
                            </div>
                            <div className="help-item">
                                <span >
                                    <AntDesign
                                        name="right"
                                        size={18}
                                        color="rgb(255, 68, 0)"
                                    />
                                    借款攻略
                                </span>
                            </div>
                            <div className="help-item">
                                <span >
                                    <AntDesign
                                        name="right"
                                        size={18}
                                        color="rgb(255, 68, 0)"
                                    />
                                    使用帮助
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}
