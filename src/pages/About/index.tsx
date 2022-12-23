import {Collapse} from "antd-mobile";
import {useState} from "react";

const About = () => {
    const [activeKey,setActiveKey] = useState('0');
    return (
        <div>
            <Collapse
                accordion={true}
                activeKey={activeKey}
                defaultActiveKey={activeKey}
                onChange={(e)=>setActiveKey(`${e}`)}
            >
                <Collapse.Panel key='1' title='使命'>
                    让更多人随时随地释放信用价值
                </Collapse.Panel>
                <Collapse.Panel key='2' title='愿景'>
                    成为每个人的信用伙伴
                </Collapse.Panel>
            </Collapse>
        </div>
    );
};
export default About;