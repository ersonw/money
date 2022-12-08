import React, {useState, useEffect} from 'react'
// @ts-ignore
import {useHistory, withRouter} from "react-router-dom";
import "./TabBar.less";
import {TabBar} from 'antd-mobile';
import home_0 from "@/assets/images/icons/home_0.png";
import home_1 from "@/assets/images/icons/home_1.png";
import mine_0 from "@/assets/images/icons/mine_0.png";
import mine_1 from "@/assets/images/icons/mine_1.png";

function BaseTabBar(props: any) {

    const [selectedTab, setSelectedTab] = useState('homeTab')
    const [hidden, setHidden] = useState(false)

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
                <
                    // @ts-ignore
                    TabBar
                    unselectedTintColor={"#999999"}
                    tintColor={"#FFFFFF"}
                    barTintColor={"#353535"}
                    // swipeable={true}
                    // hidden={hidden}
                    // tabBarPosition={'bottom'}
                >
                    <TabBar.Item
                        icon={<div style={{
                            width: '28px',
                            height: '28px',
                            background: `url(${home_0}) center center /  26px 26px no-repeat`
                        }}
                        />}
                        selectedIcon={<div style={{
                            width: '28px',
                            height: '28px',
                            background: `url(${home_1}) center center /  26px 26px no-repeat`
                        }}
                        />}
                        title="首页"
                        key="home"
                        selected={selectedTab === '/'}
                        onPress={() => {
                            props.history.push({pathname: '/'})
                            setSelectedTab('/')
                        }}
                    />
                    <TabBar.Item
                        icon={<div style={{
                            width: '28px',
                            height: '28px',
                            background: `url(${mine_0}) center center /  26px 26px no-repeat`
                        }}
                        />}
                        selectedIcon={<div style={{
                            width: '28px',
                            height: '28px',
                            background: `url(${mine_1}) center center /  26px 26px no-repeat`
                        }}
                        />}
                        title="我的"
                        key="mine"
                        selected={selectedTab === '/mine'}
                        onPress={() => {
                            props.history.push({pathname: '/mine'})
                            setSelectedTab('/mine')
                        }}
                    />
                </TabBar>
            )}
        </div>
    )
}

export default withRouter(BaseTabBar);