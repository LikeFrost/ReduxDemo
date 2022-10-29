import { useState } from "react";
import menuService from '../service/menu';

function useMenu(initialState = [
    {
      label:'menu5',
      key:1,
    },
    {
      label:'menu6',
      key:2,
    }]
){
    const [ menu, setMenu ] = useState(initialState);
    const clearMenu = () =>{
        setMenu([]);
    }
    const updateMenu = async() =>{
        const data = await menuService.updateMenu();
        setMenu(data.data.data.data);
    }
    return { menu, clearMenu, updateMenu };
}

export default useMenu;