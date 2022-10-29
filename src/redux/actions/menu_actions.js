import menuService from '../../service/menu';

//同步action
export const clearMenu = data => ({type: 'CLEAR', data});
export const updateMenu = data => ({type: 'UPDATE', data});

//异步action
export const fetchMenu = () =>{
    return async(dispatch,getState) =>{
        const data = await menuService.getMenu();
        dispatch(updateMenu(data.data.data.data));
    }
}