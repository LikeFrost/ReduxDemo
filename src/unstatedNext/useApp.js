import useMenu from "./useMenu";
import useTest from "./useTest";
import { createContainer } from 'unstated-next';
function useApp(initialState={}){
    const { menu, clearMenu, updateMenu } = useMenu(initialState.menu);
    const { test, clearTest, addTest } = useTest(initialState.test);
    return { menu, clearMenu, updateMenu, test, clearTest, addTest };
}
const UnStateNextStore = createContainer(useApp);

export default UnStateNextStore;