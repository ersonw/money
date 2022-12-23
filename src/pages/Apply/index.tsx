import './index.less';
// @ts-ignore
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import React, {useEffect, useState} from "react";
import {ErrorBlock, List, Popup, Selector, SelectorOption, Slider, Toast} from "antd-mobile";
import useFetchData from "@/utils/useFetchData";
import MaskLoading from "@/components/MaskLoading";
import http from "@/utils/http";

const Apply = ({history,}: any) => {
    // history.push({pathname: '/details'});
    const [money, setMoney] = useState(0);
    const [installments, setInstallments] = useState(3);
    const [mini, setMini] = useState(0);
    const [max, setMax] = useState(0);
    const [fee, setFee] = useState(0);
    const [stepping, setStepping] = useState(0);
    const [name, setName] = useState('');
    const [khh, setKhh] = useState('');
    const [yhk, setYhk] = useState('');
    const [visible, setVisible] = useState(false);
    const {data,loading, onReload, error, } = useFetchData('/api/apply/get',{});
    useEffect(()=>{
        if (!loading){
            const {state,mini,max,fee,stepping,name,khh,yhk} = (data as any);
            if (state){
                if (!state){
                    history.push({pathname: '/details'});
                    return;
                }
            }
            if (name){
                setName(name);
            }
            if (khh){
                setKhh(khh);
            }
            if (yhk){
                setYhk(yhk);
            }
            if (mini){
                setMini(mini);
                setMoney(mini);
            }
            if (max){
                setMax(max);
            }
            if (fee){
                setFee(fee);
            }
            if (stepping){
                setStepping(stepping);
            }
        }
    },[data]);
    const options: SelectorOption<number>[] = [
        {
            label: '3个月',
            value: 3,
        },
        {
            label: '6个月',
            value: 6,
        },
        {
            label: '12个月',
            value: 12,
        },
        {
            label: '18个月',
            value: 18,
        },
        {
            label: '24个月',
            value: 24,
        },
        {
            label: '30个月',
            value: 30,
        },
        {
            label: '36个月',
            value: 36,
        },
    ];
    if (error){
        return <ErrorBlock fullPage />
    }
    const submit = async () => {
        Toast.show({
            icon: 'loading',
            content: '提交中…',
            // duration: 0,
        });
        const data = await http.post(`/api/apply`,{money,installments},);
        const {state} = data;
        if (state){
            history.push({pathname: '/order'});
        }
    };
    const check=()=>{
        setVisible(true);
    };
    return (
        <div className='borrow'>
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
                                <span>{(money/installments+(money*fee*30)).toFixed(0)}</span>
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
                                setMoney(mini+(value*stepping))
                            }
                        }}
                    />
                    <div className='illustrate'>
                        <p>{mini}</p>
                        <span>拖动调整额度</span>
                        <p>{max}</p>
                    </div>
                </div>
            </div>
            <div className='loan-month'>
                <div>
                    <div className='title'>
                        <AntDesign
                            name="profile"
                            size={18}
                            color="currentColor"
                        />
                        <span>借款期限</span>
                    </div>
                    <Selector
                        options={options}
                        value={[installments]}
                        onChange={v => {
                            if (v.length) {
                                setInstallments(v[0])
                            }
                        }}
                    />
                </div>
            </div>
            <div className='bnt-save'>
                <div
                    // className={`bnt ${state?'adm-tabs-tab-disabled':''}`}
                    className={`bnt`}
                    onClick={check}
                >
                    立即申请
                </div>
            </div>
            <Popup
                visible={visible}
                onMaskClick={() => setVisible(false)}
                bodyStyle={{
                    height: '60vh',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px',
            }}
            >
                <div className='popup'>
                    <div className='header'>
                        <span>核对订单</span>
                        <AntDesign
                            name="closecircleo"
                            size={18}
                            color="#cccccc"
                            onClick={() => setVisible(false)}
                        />
                    </div>
                    <List>
                        <List.Item>
                            <div>借款金额</div>
                            <div>{money}元</div>
                        </List.Item>
                        <List.Item>
                            <div>还款金额</div>
                            <div>{(money/installments+(money*fee*30))*installments}元</div>
                        </List.Item>
                        <List.Item>
                            <div>借款期限</div>
                            <div>{installments}个月</div>
                        </List.Item>
                        <List.Item>
                            <div>借款人</div>
                            <div>{name}</div>
                        </List.Item>
                        <List.Item>
                            <div>收款银行</div>
                            <div>{khh}</div>
                        </List.Item>
                        <List.Item>
                            <div>收款卡号</div>
                            <div>{yhk}</div>
                        </List.Item>
                    </List>
                    <div className='bnt-box'>
                        <div className='bnt' onClick={submit}>
                            确认借款
                        </div>
                    </div>
                </div>
            </Popup>
            <MaskLoading loading={loading} />
        </div>
    );
};
export default Apply;