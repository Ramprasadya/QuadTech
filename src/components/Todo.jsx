import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo} from "../features/todo/todoSlice";
import Card from "./Card";

const Todo = () => {
  
  // Here we are finding the todos array from todoslice file
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="container mt-4 ">
        <h4 className="" >Your Todos will Display Here  </h4>
       <div className="row">
       {
        todos.length >=1 ? (
            todos.map((todo) => {
          return <Card key={todo.id}  todo={todo} removeTodo={removeTodo} />
        })
        ):(
            <div>
                No Todos have to display
            </div>
        )
       }
       </div>
      </div>
    </>
  );
};

export default Todo;
