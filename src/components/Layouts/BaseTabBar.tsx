import React, {useState, useEffect} from 'react'
// @ts-ignore
import {useHistory, withRouter} from "react-router-dom";
import {TabBar} from 'antd-mobile';
import {UserContactOutline} from 'antd-mobile-icons';
import './TabBar.less';
function BaseTabBar(props: { history: any; location: any; match: any; }) {

    const { history } = props;
    const [selectedKey, setSelectedKey] = useState('/');
    const [hidden, setHidden] = useState(false);

    let pathName = props.location.pathname
    const pathNameShow = [
        '/',
        '/mine',
    ];
    const handler = (e: React.SetStateAction<string>)=>{
        setSelectedKey(e);
        history.push({pathname: e});
    };
    useEffect(() => {
        if (!pathNameShow.includes(pathName)) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    }, [pathName])

    return (
        <>
            {!hidden&&(
                <div className='tab-bar'>
                    {!hidden&&(
                        <TabBar
                            activeKey={selectedKey}
                            onChange={handler}
                        >
                            <TabBar.Item
                                icon={<UserContactOutline />}
                                title="首页"
                                key="/"
                                // badge={1}
                            />
                            <TabBar.Item
                                icon={<UserContactOutline />}
                                title="我的"
                                key="/mine"
                                // badge={2}
                            />
                        </TabBar>
                    )}
                </div>
            )}
        </>
    );
}

export default withRouter(BaseTabBar);
