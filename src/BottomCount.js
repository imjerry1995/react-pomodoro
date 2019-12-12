import React from 'react'

const BottomCount = props =>{
  const {todo} = props
  return (
    <div className="btn-count">
      <div className="">></div>
      <div>{todo.min<10 ? '0'+todo.min:todo.min}:{todo.sec<10 ? '0'+todo.sec:todo.sec}</div>
      <div>{todo.text}</div>
      {todo.sec && <div>dddd</div>}
    </div>
  )
}

export default BottomCount