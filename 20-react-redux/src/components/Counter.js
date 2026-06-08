import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index.js'

const Counter = () => {
  /* 
    useSelector create auto a subscription for redux store, with this everytime the data change in redux, 
    this will be re-render again with the lastest values.
  */
  const counter = useSelector(state => state.counterStore.counter);
  const showCounter = useSelector(state => state.counterStore.showCounter);
  const dispatch = useDispatch();

  console.log(counter)

  function incrementHandler(amountValue) {
    dispatch(counterActions.increment(amountValue));

    // dispatch({
    //   type: 'increment',
    //   amount: amountValue
    // });
  }

  function decrementHandler(amountValue) {
    dispatch(counterActions.decrement(amountValue));

    // dispatch({
    //   type: 'decrement',
    //   amount: amountValue
    // });
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increment +5</button>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
