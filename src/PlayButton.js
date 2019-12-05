import React, {Component} from 'react'

class PlayButton extends Component{
  constructor(props){
    super(props)

    this.play = this.play.bind(this)
  }

  play(){
    const {todo, handlePlay} = this.props
    handlePlay(todo.id)
  }

  render(){
    const {isPause} = this.props.todo
    return(
      <button onClick={this.play}>{isPause ? '||':'>'}</button>
    )
  }
}

export default PlayButton