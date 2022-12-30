import qs from "qs";
import {ErrorBlock} from "antd-mobile";
import React from "react";
import useFetchData from "@/utils/useFetchData";

const Contract = ({location,}: { location: any;}) =>{
    const {data,loading, onReload, error, } = useFetchData(`/api/order/`,{});
    let {search} = location;
    if (!search){
        return <ErrorBlock fullPage />
    }
    const _q = qs.parse(search.substring(1));
    const { orderNo } = _q;
    if (orderNo&&!loading){
        onReload(`/api/order/${orderNo}`);
    }
    if (error){
        return <ErrorBlock fullPage />
    }
    return (
        <div></div>
    );
}
export default Contract;