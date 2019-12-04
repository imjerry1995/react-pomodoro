import React from 'react'

const Todo = (props) => {
  console.log(props)
  const {id, text, isChecked, isActivated, amounts} = props.todo
  return (
    <div data-id={id}>
      <div>{text}</div>
    </div>
  )
}

export default Todo