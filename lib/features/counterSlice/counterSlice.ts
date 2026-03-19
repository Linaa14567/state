<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";


=======

import { createSlice } from '@reduxjs/toolkit';
>>>>>>> d7e9ae2f4c8595e0507e6f03fbe788c11536abda

// Define type or interface
export interface CounterState {
    value: number;
}

// 1. Define initialstate
const initialState: CounterState = {
    value: 0
}

// 2. Define Reducer
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=>{
            state.value+=1;
        },
        decrement: (state)=>{
            state.value-=1;
        },
        clearvalue: (state)=>{
            state.value =0;
        }
    }
})

// export action of reducer
export const {increment, decrement ,clearvalue}= counterSlice.actions;

export default counterSlice.reducer;
