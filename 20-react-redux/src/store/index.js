// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAuthState = { 
    isAuthenticated: false
}

const initialCounterState = { 
    counter : 0, 
    showCounter: true 
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// With createSlice it prevent that we can by mistake manipulate the original state
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload; // payload is the default name for redux-toolkit
            // state.counter++;
        },
        decrement(state, action) {
            state.counter = state.counter - action.payload; // payload is the default name for redux-toolkit
            // state.counter--;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: {
        counterStore: counterSlice.reducer,
        authStore: authSlice.reducer
    },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

// Old reducer with redux library only
// const counterReducer = (state = initialStoreState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer); // Create the store with the reducer functions