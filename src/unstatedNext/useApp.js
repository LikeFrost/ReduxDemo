import useMenu from "./useMenu";
function useApp(initialState={}){
    const { menu, clearMenu, updateMenu } = useMenu(initialState.menu);
    return { menu, clearMenu, updateMenu };
}

export default useApp;