import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import Card from "./Card";

const Todo = () => {
  const Disapatch = useDispatch();
  // Here we are finding the todos array from todoslice file
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="container mt-4 ">
        <h4 className="" >Your Todos will Display Here  </h4>
       <div className="row">
       {todos.map((todo) => {
          return <Card todo={todo} />
        })}
       </div>
      </div>
    </>
  );
};

export default Todo;
