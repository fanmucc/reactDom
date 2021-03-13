import React, { useState, useEffect, useContext } from 'react'

// useState  创建变量
// useEffect 监听数据变化
// useContext 上下文



// 封装 useState
function useCount(params) {
  const [count, setCount ] = useState(0)
  return [count, () => {
    setCount(count + 1)
  }]
}

// 封装useEffect
function log (count) {
  console.log(`you clicked count ${count} times`)
}

// 通过 useEffect 创建个计时器
function useIntervals (callback, time) {
  useEffect(() => {
    const I = setInterval(callback, time)
    return () => {
      clearInterval(I)
    }
  }, [])
}
function HooksDemo () {
  // 基础数据 设置变量
  // const [count, setCount] = useState(0);
  const [count, addCount] = useCount(0);
  // count 状态  setCount 行为


  const [nums, setNums] = useState(0);
  // useEffect(() => {
  //   console.log(nums);
  // }, [nums])

  useEffect(log.bind(null, count), [count])

  useIntervals(() => {
    setNums(nums => nums + 1)
  }, 1000)

  return (
    <div>
      <p>{count}</p>
      <p>{nums}</p>
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      <button onClick={() => addCount()}>+</button>
    </div>
  )
}

export default HooksDemo