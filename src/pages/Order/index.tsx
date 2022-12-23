import './index.less';
import {Card, Empty, ErrorBlock, List} from "antd-mobile";
import useFetchData from "@/utils/useFetchData";
import React, {useEffect, useState} from "react";
const Order = () =>{
    const [page,setPage] = useState(1);
    const {data,loading, onReload, error, } = useFetchData(`/api/order/${page}`,{list:[],total: 0});
    if (error){
        return <ErrorBlock fullPage />
    }
    const {list,total} = data;
    if (list.isEmpty){
        return <Empty
            style={{ padding: '64px 0' }}
            imageStyle={{ width: 128 }}
            description='暂无数据'
        />
    }
    return (
        <div className='order'>
            <List
                style={{
                    '--border-bottom': 'transparent',
                    '--border-top': 'transparent',
                    '--border-inner': 'transparent',
                }}
            >
                {list.map((item: any,index: number)=>(
                    <List.Item
                        className='list-item'
                    >
                        <Card
                            className='item-card'
                            // onClick={onClick}
                        >
                            <div className='header'>
                                借款编号 {item.orderNo}
                            </div>
                            <div className='body'>
                                <div className='item'>
                                    <p>{(item.fee)*100}%</p>
                                    <span>日利率</span>
                                </div>
                                <div className='item'>
                                    <p>{item.installments}个月</p>
                                    <span>借款时长</span>
                                </div>
                                <div className='item'>
                                    <p>¥ {item.money}</p>
                                    <span>借款金额</span>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <span>
                                    {`${new Date(item.addTime).getFullYear()}-${new Date(item.addTime).getMonth()+1}-${new Date(item.addTime).getDate()}`}
                                </span>
                                <div
                                    onClick={()=>{}}
                                >
                                    查看合同
                                </div>
                            </div>
                        </Card>
                    </List.Item>
                ))}
            </List>
        </div>
    );
};
export default Order;