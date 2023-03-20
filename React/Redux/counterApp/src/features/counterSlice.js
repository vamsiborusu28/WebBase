// Creating Slices aka features for our Application
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    count:0
};

export const counterSlice =createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrementValue : (state) =>{
            state.count+=1;
        },

        decrementValue : (state) => {
            state.count-=1;
        },

        incrementByNum : (state,action) => {
            state.count+=action.payload;
        }

    }
}) 

export const  {incrementValue,decrementValue,incrementByNum} = counterSlice.actions;
export default counterSlice.reducer;