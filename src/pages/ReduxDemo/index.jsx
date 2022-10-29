import { Button } from 'antd';
import { connect } from 'react-redux';
import { fetchMenu, clearMenu } from '../../redux/actions/menu_actions';

import styles from './index.module.less'

const ReduxDemo = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Redux</div>
      <div className={styles.button}>
        <Button onClick={()=>{props.clearMenu()}}>清空menu</Button>
        &nbsp;&nbsp;
        <Button onClick={()=>{props.fetchMenu()}}>获取menu</Button>
      </div>
      {
        props.menu.map((item,index)=>{
          return <li key={index}>{item.label}</li>
        })
      }
    </div>
  );
};

function mapStateToProps(state){
  return{
    menu:state
  }
}

function mapDispatchToProps(dispatch){
  return{
    clearMenu(){
      dispatch(clearMenu());
    },
    fetchMenu(){
      dispatch(fetchMenu());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxDemo);