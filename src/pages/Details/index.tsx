import './index.less';
import {Swiper, SwiperRef, Tabs} from "antd-mobile";
import {useRef, useState} from "react";
import Sfz from "@/pages/Details/components/Sfz";
import Yhk from "@/pages/Details/components/Yhk";
import Sign from "@/pages/Details/components/Sign";
const Details = ({history}: { history: any;})=>{
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
    const setIndex = (index: number)=>{
        setActiveIndex(index);
        swiperRef.current?.swipeTo(index);
    };
    return (
        <div className='details-container'>
            <Tabs
                activeKey={tabItems[activeIndex].key}
                onChange={(key) => {
                    // const index = tabItems.findIndex((item) => item.key === key);
                    // setActiveIndex(index);
                    // swiperRef.current?.swipeTo(index);
                }}
                activeLineMode='fixed'
                style={{
                    '--active-title-color': 'black',
                    '--title-font-size': '1em',
                }}
            >
                {tabItems.map((value,index)=>(
                    <Tabs.Tab
                        title={value.title}
                        key={value.key}
                        style={{
                            color: activeIndex>=index?'rgb(230, 126, 34)':'black',
                            fontWeight: activeIndex===index?'bold':'',
                        }}
                        // disabled={activeIndex!==index}
                    />
                ))}
            </Tabs>
            {/*<Swiper*/}
            {/*    direction="horizontal"*/}
            {/*    loop*/}
            {/*    indicator={() => null}*/}
            {/*    ref={swiperRef}*/}
            {/*    defaultIndex={activeIndex}*/}
            {/*    onIndexChange={(index) => {*/}
            {/*        // setActiveIndex(index);*/}
            {/*        // swiperRef.current?.swipeTo(index);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Swiper.Item>*/}
            {/*        <Sfz setIndex={setIndex} />*/}
            {/*    </Swiper.Item>*/}
            {/*    <Swiper.Item>*/}
            {/*        <Yhk setIndex={setIndex} />*/}
            {/*    </Swiper.Item>*/}
            {/*    <Swiper.Item>*/}
            {/*        <Sign setIndex={setIndex} history={history} />*/}
            {/*    </Swiper.Item>*/}
            {/*</Swiper>*/}
            {activeIndex===0&&(
                <Sfz setIndex={setIndex} />
            )}
            {activeIndex===1&&(
                <Yhk setIndex={setIndex} />
            )}
            {activeIndex===2&&(
                <Sign setIndex={setIndex} history={history} />
            )}
        </div>
    );
};

export default Details;