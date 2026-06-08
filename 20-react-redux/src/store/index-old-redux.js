import { createStore } from 'redux';

const initialStoreState = { 
    counter : 0, 
    showCounter: true 
}

const counterReducer = (state = initialStoreState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
}

const store = createStore(counterReducer); // Create the store with the reducer functions

export default store;