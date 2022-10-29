import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import ReduxDemo from './pages/ReduxDemo';
import reduxStore from './redux/redux_store';

import RTKDemo from './pages/RTKDemo';
import store from './reduxToolkit/store';
import TestRTK from './pages/TestRTK';

import UnstatedNextDemo from './pages/UnstatedNextDemo';
import UnStateNextStore from './unstatedNext/useApp';
import TestHook from './pages/TestHook';

import styles from './index.module.less';

function ExpensiveComponent(props) {
  return (
    <div>
      <div>
        <div>
          {/* <div>SUPER EXPENSIVE RENDERING STUFF</div> */}
          {console.log(props.props)}
        </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className={styles.container}>
    <Provider store={store}>
      <RTKDemo/>
      <TestRTK/>
      <ExpensiveComponent props='1'/>
    </Provider>

    <Provider store={reduxStore}>
      <ReduxDemo/>
      <ExpensiveComponent props='2'/>
    </Provider>
    
    <UnStateNextStore.Provider >
      <UnstatedNextDemo/>
      <TestHook/>
      <ExpensiveComponent props='3'/>
    </UnStateNextStore.Provider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
