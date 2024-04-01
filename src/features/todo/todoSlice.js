import { createSlice ,nanoid } from "@reduxjs/toolkit";

// Intializing a intial state we will update it letter 
const initialState = {
    todos : [{id:1,text:"Hello world"}]
}

// All function we will write here 
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers : {
        // Add Todo Logic
        addTodo : (state,action)=>{
         const todo ={
            id : nanoid(),
            text : action.payload
         }
         state.todos.push(todo)
        },
        // Delete Todo Logic
        removeTodo :(state,action)=>{
         state.todos = state.todos.filter((todo)=>{
          return  todo.id !== action.payload
        })
        }
    }
})

// Exporting for the component 
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;

// Exporting todoSlice reducer to give access to store .js 
export default todoSlice.reducer;


