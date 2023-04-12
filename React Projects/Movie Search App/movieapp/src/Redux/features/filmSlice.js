import { createSlice } from '@reduxjs/toolkit';

const initialState={
    filmList:[]
};

export const filmSlice=createSlice({
    name:'film',
    initialState,
    reducers:{
        addFilm:(state,action) => {
            state.filmList.push(action.payload);
            console.log(state.filmList);
        }
    }
});

export const  {addFilm} = filmSlice.actions;
export default filmSlice.reducer;
