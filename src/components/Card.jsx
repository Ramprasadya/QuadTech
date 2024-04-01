import React from 'react'
import { useDispatch } from 'react-redux';

const Card = ({todo,removeTodo}) => {
    const Disapatch = useDispatch();
  return (
    <div  className="col-sm-6 mb-3 mb-sm-0" >
    <div className="card mt-3 ">
      <div className="card-body">
        <p className="card-text">{todo.text}</p>
        <a
          onClick={() => Disapatch(removeTodo(todo.id))}
          className="btn btn-primary"
        >
          Delete
        </a>
      </div>
    </div>
  </div>
  )
}

export default Card