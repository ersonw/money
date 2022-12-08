import React, {useState, useEffect} from 'react'
// @ts-ignore
import {useHistory, withRouter} from "react-router-dom";
import "antd-mobile/es/components/tab-bar/tab-bar.css";
import {TabBar,TabBarItem} from 'antd-mobile/es/components/tab-bar/tab-bar';
import home_0 from "@/assets/images/icons/home_0.png";
import home_1 from "@/assets/images/icons/home_1.png";
import mine_0 from "@/assets/images/icons/mine_0.png";
import mine_1 from "@/assets/images/icons/mine_1.png";

function BaseTabBar(props: any) {

    const [selectedTab, setSelectedTab] = useState('homeTab')
    const [selectedKey, setSelectedKey] = useState('');
    const [hidden, setHidden] = useState(false);

    let pathName = props.location.pathname
    const pathNameShow = [
        '/',
        '/mine',
    ];

    useEffect(() => {
        if (!pathNameShow.includes(pathName)) {
            setHidden(true)
        } else {
            setSelectedTab(pathName)
        }
    }, [pathName])

    return (
        <div style={{position: 'fixed', width: '100%', bottom: 0, zIndex: 99, justifyContent:'center',alignItems: 'center',}}>
            {!hidden&&(
                <TabBar
                    activeKey={selectedKey}
                    onChange={setSelectedKey}
                >
                    <TabBarItem
                        icon={<div style={{
                            width: '28px',
                            height: '28px',
                            background: `url(${home_0}) center center /  26px 26px no-repeat`
                        }}
                        />}
                        title="首页"
                        key="home"
                        badge={1}
                    />
                    <TabBarItem
                        icon={<div style={{
                            width: '28px',
                            height: '28px',
                            background: `url(${mine_0}) center center /  26px 26px no-repeat`
                        }}
                        />}
                        title="我的"
                        key="mine"
                        badge={2}
                    />
                </TabBar>
            )}
        </div>
    )
}

export default withRouter(BaseTabBar);
