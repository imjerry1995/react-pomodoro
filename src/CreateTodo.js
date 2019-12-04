import React, {Component} from 'react'

const CreateTodo = (props) =>{
  return (
    <div>
      <input type="text" placeholder="ADD A NEW MISSION..." 
      value={props.text}/>
      <button onClick={props.handleSubmit}>+</button>
    </div>
  )
}

export default CreateTodo