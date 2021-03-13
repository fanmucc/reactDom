// 引用行为

// useRef      副作用，方便值得保存

import React, { useRef, useState } from 'react'

export default () => {
  const refs = useRef(null)
  // 值得暂存
  const [count, setRefCount] = useState(0)
  const countRefs = useRef(null)
  return (
    <div>
      <input ref={refs} type="text"/>
      <button onClick={() => {refs.current.focus()}}>Focus</button>
      <br/>
      <p>{count}</p>
      <p>{countRefs.current}</p>
      <button onClick={() => {countRefs.current = count; setRefCount(count + 1)}}>+</button>
      <button onClick={() => {countRefs.current = count; setRefCount(count - 1)}}>-</button>
    </div>
  )
}