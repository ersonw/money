import './index.less';
// @ts-ignore
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import React from "react";
import {Slider} from "antd-mobile";
const Apply = ({history,}:any)=>{
    // history.push({pathname: '/details'});
    return (
        <>
            <div className='loan-box'>
                <div className='money'>
                    <p> 借款金额（元） </p>
                    <span> 48000 </span>
                    <AntDesign
                        name="edit"
                        size={20}
                        color="currentColor"
                    />
                    <div className='details-box'>
                        <div>
                            <div className='details'>
                                <span>48000</span>
                                <p> 到帐金额(元) </p>
                            </div>
                            <div className='details'>
                                <span>48000</span>
                                <p> 到帐金额(元) </p>
                            </div>
                            <div className='details'>
                                <span>48000</span>
                                <p> 到帐金额(元) </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='loan-slider-box'>
                <div className='title'>
                    <AntDesign
                        name="pay-circle-o1"
                        size={18}
                        color="currentColor"
                    />
                    借款金额
                </div>
                <Slider
                    // step={1}
                    min={100}
                    max={100}
                    ticks
                    onAfterChange={()=>{}}
                />
            </div>
        </>
    );
};
export default Apply;