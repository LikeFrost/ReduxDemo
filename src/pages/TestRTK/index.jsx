import { useSelector, useDispatch } from 'react-redux';

const TestRTK = () => {
  const test = useSelector(state => state.test);
  return (
    <div>
      {console.log('testRTK')}
      {test}
    </div>
  );
};
export default TestRTK;