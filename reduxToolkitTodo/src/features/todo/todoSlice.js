import {createSlice , nanoid} from '@reduxjs/toolkit';


const initialState = {
    todos:[{id:1,text:"hello world"}]
}

function sayHello(){
    console.log("Hello world")
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo={
                id: nanoid(),
                text:action.payload
            }
        },
        removeTodo:(state,action)=>{},
    }
})