import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slice/menuSlice';
import testReducer from './slice/testSlice'
export default configureStore({
    reducer:{
        menu: menuReducer,
        test: testReducer,
    }
})