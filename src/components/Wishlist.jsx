import React from "react";

const Wishlist = () => {
    const[query, setquery]= React.useState("");
    const[tasks, settasks] = React.useState([]);
    const handlechange = (event) => {
        const {value} = event.target;
        setquery(value)
  };

  const addTodo = () =>{
    const payload = {
        todo: query,
        status:false,
    };
    let updatedtasks = [...tasks, payload];
    settasks(updatedtasks);
};

    return (
    <>
      <input type="text" placeholder="Something type" onChange={handlechange} 
       value={query} />
       <button onClick={ addTodo }>Add TodoList</button>
      {
          tasks.map(({todo,status}, idx)=>(<div key={idx}>{todo}</div>))
      }
    </>
    )
}
export {Wishlist};