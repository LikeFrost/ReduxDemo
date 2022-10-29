import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
    name:'test',
    initialState:0,
    reducers:{
        clearTest(state){
            state = 0;
        },
        addTest(state){
            state++;
        }
    }
})

export const {clearTest,addTest} = testSlice.actions;
export default testSlice.reducer;