import './index.less';
// @ts-ignore
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import React, {useState} from "react";
import {Slider} from "antd-mobile";
const Apply = ({history,}:any)=>{
    // history.push({pathname: '/details'});
    const [money,setMoney] = useState(30000);
    const [installments,setInstallments] = useState(3);
    return (
        <>
            <div className='loan-box'>
                <div className='money'>
                    <p> 借款金额（元） </p>
                    <span>{money}</span>
                    <AntDesign
                        name="edit"
                        size={20}
                        color="currentColor"
                    />
                    <div className='details-box'>
                        <div>
                            <div className='details'>
                                <span>{money}</span>
                                <p> 到帐金额(元) </p>
                            </div>
                            <div className='details'>
                                <span>{(money/installments+180).toFixed(0)}</span>
                                <p> 每期还款(元) </p>
                            </div>
                            <div className='details'>
                                <span>{installments}</span>
                                <p> 借款期限(个月) </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='loan-slider-box'>
                <div>
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
                        min={0}
                        max={270}
                        ticks
                        onAfterChange={()=>{}}
                        onChange={(value: number|[number,number])=>{
                            if (typeof value === "number"){
                                setMoney(30000+(value*1000))
                            }
                        }}
                    />
                    <div className='illustrate'>
                        <p>30000</p>
                        <span>拖动调整额度</span>
                        <p>300000</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Apply;