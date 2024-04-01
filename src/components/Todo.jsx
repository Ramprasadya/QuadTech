import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

const Todo = () => {
    const Disapatch = useDispatch()
   const todos =  useSelector((state)=> state.todos )
  return (
   <>
   <div>
    <h2>Todos</h2>
     {
      todos.map((todo)=>{
        return <div key={todo.id} >
            {todo.text}
            <button onClick={()=> Disapatch(updateTodo(todo.id)) } >Edit</button>
            <button onClick={()=> Disapatch(removeTodo(todo.id)) } >remove</button>
        </div>
      })
     }
   </div>
   </>
  )
}

export default Todo