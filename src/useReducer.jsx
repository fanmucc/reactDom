// 设计模式
import React, { useReducer } from 'react'

function reducer (state, action) {
  console.log(state, action)
  switch (action.type) {
    case 'add': return state + 1
    case 'remove': return state - 1
  }
}
export default () => {
  const [counter, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      {counter}
      <button onClick={() => {dispatch({type: 'add'})}}>+</button>
      <button onClick={() => {dispatch({type: 'remove'})}}>-</button>
    </div>
  )
}