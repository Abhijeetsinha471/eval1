import React from "react";

const Vegitable = () =>{
    const [count, setcount] = React.useState(0);
     const changevalue = (val) => {
          setcount((prev)=>{
              return prev+val;               

         })
     }
    return (
        <div>
          <div>Potatos: {count} Kg.</div>
          <button onClick={()=>{changevalue(+1)}}>+1</button>
          <button onClick={()=>{changevalue(-1)}}>-1</button>
        </div>

        
    )
}
export {Vegitable};
