import React from 'react';
import { Button } from 'antd';
import UnStateNextStore from '../../unstatedNext/useApp';
import styles from './index.module.less';

function UnstatedNextDemo() {
  const menu = UnStateNextStore.useContainer();
  return (
    <div className={styles.container}>
      <div className={styles.title}>UnstatedNext</div>
      <div className={styles.button}>
        <Button onClick={()=>{menu.clearMenu()}}>清空menu</Button>
        &nbsp;&nbsp;
        <Button onClick={()=>{menu.updateMenu()}}>获取menu</Button>
      </div>
      {
        menu.menu.map((item,index)=>{
          return <li key={index}>{item.label}</li>
        })
      }
    </div>
  );
}

export default UnstatedNextDemo;
