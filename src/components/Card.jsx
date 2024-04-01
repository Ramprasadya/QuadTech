import React from 'react'

const Card = ({todo}) => {
  return (
    <div key={todo.id}  className="col-sm-6 mb-3 mb-sm-0" >
    <div class="card mt-3 ">
      <div class="card-body">
        <p class="card-text">{todo.text}.</p>
        <a
          onClick={() => Disapatch(removeTodo(todo.id))}
          class="btn btn-primary"
        >
          Delete
        </a>
      </div>
    </div>
  </div>
  )
}

export default Card