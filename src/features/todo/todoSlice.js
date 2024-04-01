import { createSlice ,nanoid } from "@reduxjs/toolkit";

// Intializing a intial state we will update it letter 
const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || []
}

// All function we will write here 
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers : {
        // Add Todo Logic
        addTodo : (state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
            // Update local storage
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        // Delete Todo Logic
        removeTodo :(state,action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            // Update local storage
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }
    }
})

// Exporting for the component 
export const {addTodo,removeTodo} = todoSlice.actions;

// Exporting todoSlice reducer to give access to store .js 
export default todoSlice.reducer;


