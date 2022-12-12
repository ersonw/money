import './index.less';
import {DotLoading, SpinLoading} from "antd-mobile";
import React from "react";
const MaskLoading = ({loading=true}:{loading?: boolean})=>{
    if (!loading){
        return <></>
    }
    return (
        <div className="mask-loading">
            {/*<DotLoading*/}
            {/*    color='currentColor'*/}
            {/*    style={{*/}
            {/*        marginRight: 0,*/}
            {/*        fontSize: '1rem',*/}
            {/*    }}*/}
            {/*/>*/}
            <DotLoading
                color='currentColor'
                style={{
                    marginLeft: 0,
                    fontSize: '2.1rem',
                }}
            />
            {/*<SpinLoading style={{ '--size': '3rem' }} />*/}
        </div>
    );
};
export default MaskLoading;