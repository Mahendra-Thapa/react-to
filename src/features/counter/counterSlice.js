import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'countSlice',
  initialState:{
    count:0
  },
  reducers:{
increment: (state, action)=>{
state.count = state.count + 1;
}  

}, 
  
});

export const {increment} =counterSlice.actions;
