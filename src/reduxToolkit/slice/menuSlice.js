import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import menuService from '../../service/menu';

export const getMenu = createAsyncThunk(
    "menu/getMenu",
    async () =>{
        const res =  await menuService.getMenu();
        return res.data;
    }
)

export const menuSlice = createSlice({
    name:'menu',
    initialState:{
        menuList:[
            {
              label:'menu1',
              key:1,
            },
            {
              label:'menu2',
              key:2,
            }
          ],
    },
    //同步actions
    reducers:{
        clearMenu(state){
            state.menuList = [];
        },
    },
    //异步actions
    extraReducers:(builder)=>{
        builder.addCase(getMenu.fulfilled,(state,action)=>{
            state.menuList = action.payload.data.data;
        })
    }
})

export const { clearMenu } = menuSlice.actions;
export default menuSlice.reducer;