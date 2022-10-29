import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { clearMenu, getMenu } from '../../reduxToolkit/slice/menuSlice';
import styles from './index.module.less';

const RTKDemo = () => {
  const menuList = useSelector(state => state.menu.menuList);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.title}>ReduxToolkit</div>
      <div className={styles.button}>
        <Button onClick={()=>dispatch(clearMenu())}>清空menu</Button>
        &nbsp;&nbsp;
        <Button onClick={()=>dispatch(getMenu())}>获取menu</Button>
      </div>
      {
        menuList.map((item,index)=>{
          return <li key={index}>{item.label}</li>
        })
      }
    </div>
  );
};
export default RTKDemo;