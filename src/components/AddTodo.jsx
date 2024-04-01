import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState('')
    const Dispatch = useDispatch()

    const handelFormSubmit=(e)=>{
    e.preventDefault()
    Dispatch(addTodo(input))
    setInput("")
    }


  return (
    <>
      <div className="container mt-5 ">
        <form onSubmit={handelFormSubmit} >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Add Your To-Do
            </label>
            <input type="text" className="form-control"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
             />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
