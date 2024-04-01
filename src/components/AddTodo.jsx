import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState('')
    const Dispatch = useDispatch()

    const handelFormSubmit=(e)=>{
    e.preventDefault()
    // Here we are saving the todo or executing the function
    Dispatch(addTodo(input))
    // Clearing the input box 
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
            <textarea type="text" className="form-control"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
             />
          </div>
          <button type="submit" className="btn btn-primary">
           Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
