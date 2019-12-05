import React, {Component} from 'react'

// const Todo = (props) => {
//   const {id, text, isChecked, isActivated, amounts} = props.todo
//   return (
//     <div data-id={id} className={`list-item ${isActivated ? 'list-item--ative':''}`}>
//       <button className="list-item__checked" onClick={()=>{
// 					props.handleDelete(id)
// 			}}>
//       </button>
//       <div className="list-item__text">{text}</div>
//       <ul className="list-item__amount-list">
//         <li>{amounts}</li>
//       </ul>
//       {isActivated && <div className="list-item__time">25:00</div>}
//     </div>
//   )
// }

class Todo extends Component{
  constructor(props){
    super(props)

    this.delete = this.delete.bind(this)
  }

  delete(){
    const {todo, handleDelete} = this.props
    handleDelete(todo.id)
  }

  render(){
    const {id, text, isChecked, isActivated, amounts} = this.props.todo
    return (
      <div data-id={id} className={`list-item ${isActivated ? 'list-item--ative':''}`}>
      <button className="list-item__checked" onClick={this.delete}>
      </button>
      <div className="list-item__text">{text}</div>
      <ul className="list-item__amount-list">
        <li>{amounts}</li>
      </ul>
      {isActivated && <div className="list-item__time">25:00</div>}
    </div>
    )
  }
}

export default Todo