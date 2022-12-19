import React from "react";

const Sign = ({setIndex,}: any) => {
    return (
        <div>
            <div className='bnt-yhk'>
                <div
                    // className={`bnt ${state?'adm-tabs-tab-disabled':''}`}
                    className={`bnt-cancel`}
                    onClick={()=>setIndex(0)}
                >
                    上一步
                </div>
                <div
                    // className={`bnt ${state?'adm-tabs-tab-disabled':''}`}
                    className={`bnt`}
                    // onClick={submit}
                >
                    提交
                </div>
            </div>
        </div>
    );
};
export default Sign;