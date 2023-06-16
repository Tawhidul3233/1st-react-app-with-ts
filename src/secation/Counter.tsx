import React, { useReducer } from 'react'

const initialState = {
  count: 0
}

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';
const INCREMENTBYAMOUNT = 'incrementbyamount';

type incrementType = { type: typeof INCREMENT };
type decrementType = { type: typeof DECREMENT };
type resetType = { type: 'reset' };
type incrementbyamountType = { type: 'incrementbyamount', payload: number };


type actionType = incrementType | decrementType | resetType | incrementbyamountType;

const reducer = (state: typeof initialState, action: actionType) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case INCREMENTBYAMOUNT:
      return {
        ...state,
        count: state.count + action?.payload
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case RESET:
      return {
        ...state,
        count: 0
      }

    default:
      return state;
  }
}

const Counter = () => {
  const [updatedState, dispatch] = useReducer(reducer, initialState);
  return (
    <div>Counter 1  <br />
      <p> Count : {updatedState.count}  </p> <br />
      <button onClick={() => dispatch({ type: 'increment' })}> increment </button>
      <button onClick={() => dispatch({ type: 'decrement' })}> decrement </button>
      <button onClick={() => dispatch({ type: 'reset' })}> reset </button>
      <button onClick={() => dispatch({ type: 'incrementbyamount', payload: 10 })}> incrementByAmount </button>
    </div>
  )
}

export default Counter