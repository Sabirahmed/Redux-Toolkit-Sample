import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showControl:true}

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showControl = !state.showControl;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
