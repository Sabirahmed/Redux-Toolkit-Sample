
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';



// Old redux use
// const counterReducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'increment':
//             return{
//                 counter: state.counter + 1,
//                 showControl: state.showControl,
//             }
//         case 'decrement' :
//            return {
//                  counter: state.counter - 1,
//                  showControl: state.showControl,
//             }   

//         case 'increase' :
//             return {
//                 counter: state.counter + action.payload,
//                 showControl: state.showControl

//             }    
//         case 'toggle':
//             return {
//                 counter:state.counter,
//                 showControl: !state.showControl
//             }

//         default:
//             return state     
//     }

// };

const store = configureStore({
    reducer: {counter:counterReducer, auth:authReducer},
});




export default store;
