import React, { useMemo, useState } from 'react'

// useCallback 缓存函数
// useMemo 缓存值

export default () => {
  const [count, setCount] = useState(0)
  const memorizedText = useMemo(() => {
    return `this is useMemo times ${Date.now()}`
  }, [])
  
  return (
    <div>
      {memorizedText}
      <p>this is Memo text {} times</p>
    </div>
  )
}