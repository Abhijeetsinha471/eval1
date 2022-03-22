import React from "react";

const Tomatao = () => {
    const [count, setcount ] = React.useState((0));
    const changevalue = (val) => {
        setcount((prev)=>{
            return prev + val;
        })
    }
     
    return(
        <div>
          <div>Tomato {count} kg</div>
          <button onClick={()=>{changevalue(+1)}}>+1</button>
          <button onClick={()=>{changevalue(-1)}}>-1</button>
        </div>
    )
}
export {Tomatao};