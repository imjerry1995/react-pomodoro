import React, {Component} from 'react'

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
    const {handlePlay} = this.props
    let list = []
    for(let i=0;i<amounts;i++){
      list.push(``)
    }
    return (
      <div data-id={id} className={`list-item ${isActivated ? 'list-item--ative':''}`}>
        <button className="list-item__checked" onClick={this.delete}></button>
        <div className="list-item__text">{text}</div>
        <ul className="list-item__amount-list">
          {list.map((item, index)=>{
            return <li key={index}>{item}</li>
          })}
        </ul>
        {isActivated && <div className="list-item__time">25:00</div>}
        <button onClick={handlePlay}>></button>
      </div>
    )
  }
}

export default Todo