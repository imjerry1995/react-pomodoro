import React from 'react'

const Todo = (props) => {
  const {id, text, isChecked, isActivated, amounts} = props.todo
  return (
    <div data-id={id} className={`list-item ${isActivated ? 'list-item--ative':''}`}>
      <button className="list-item__checked" onClick={()=>{
					props.handleDelete(id)
				}}>
        
      </button>
      <div className="list-item__text">{text}</div>
      <ul className="list-item__amount-list">
        <li>{amounts}</li>
      </ul>
      {isActivated && <div className="list-item__time">25:00</div>}
    </div>
  )
}

export default Todo