import React from 'react';
import UnStateNextStore from '../../unstatedNext/useApp';

function TestHook() {
  const store = UnStateNextStore.useContainer();
  return (
    <div>
      {console.log('testHook')}
      {store.test}
    </div>
  );
}

export default TestHook;
