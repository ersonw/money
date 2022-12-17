import './index.less';
import {Swiper, SwiperRef, Tabs} from "antd-mobile";
import {useRef, useState} from "react";
import Sfz from "@/pages/Details/components/Sfz";
const Details = ()=>{
    const [activeKey,setActiveKey] = useState("sfz");
    const swiperRef = useRef<SwiperRef>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const tabItems = [
        {
            key: 'sfz',
            title: '身份证信息',
        },
        {
            key: 'yhk',
            title: '银行卡信息',
        },
        {
            key: 'sign',
            title: '手写签名',
        },
    ];
    return (
        <div className='details-container'>
            <Tabs
                activeKey={tabItems[activeIndex].key}
                onChange={(key) => {
                    const index = tabItems.findIndex((item) => item.key === key);
                    setActiveIndex(index);
                    swiperRef.current?.swipeTo(index);
                }}
                activeLineMode='fixed'
            >
                {tabItems.map((value,index)=>(
                    <Tabs.Tab title={value.title} key={value.key} />
                ))}
            </Tabs>
            <Swiper
                direction="horizontal"
                loop
                indicator={() => null}
                ref={swiperRef}
                defaultIndex={activeIndex}
                onIndexChange={(index) => {
                    setActiveIndex(index);
                }}
            >
                <Swiper.Item>
                    <Sfz />
                </Swiper.Item>
            </Swiper>
        </div>
    );
};

export default Details;