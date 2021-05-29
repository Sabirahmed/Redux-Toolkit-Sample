import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from '../redux/store/counterSlice';

const Counter = () => {

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const counter = useSelector(state => state.counter.counter);
  const showControl = useSelector(state => state.counter.showControl);



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showControl && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {

//   incrementHandler = () => {
//     this.props.abc();
//   }

//   decrementHandler = () => {
//     this.props.xyz();
//   }

//   increaseHandler = () => {
//     this.props.increase();
//   }

//   render() {
//     return (
//           <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div>
//               <button onClick={this.incrementHandler}>Increment</button>
//               <button onClick={this.increaseHandler}>Increment 10</button>
//               <button onClick={this.decrementHandler}>Decrement</button>
//             </div>
            
//             <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//           </main>
//         );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter:state.counter,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     abc:()=> dispatch({type:'increment'}),
//     xyz:()=> dispatch({type:'decrement'}),
//     increase: ()=> dispatch({type:'increase', payload: 10})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
