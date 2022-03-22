import React from "react";

const Onion = () => {
    const [count, setcount] =React.useState((0));
    const changevalue = (val) => {
         setcount ((prev)=>{
            return prev+val;
        })
    }
    return (
        <div>
    <div>Onion : { count } kg.</div>
    <button onClick={()=>changevalue(+1)}>+1</button>
    <button onClick={()=>changevalue(-1)}>-1</button>
    </div>
    )
}
export {Onion};