import React, {Component} from 'react'
import { Route } from 'react-router'
import HomeTodo from './HomeTodo'
import ShowTodo from './ShowTodo'
import Layout from './Layout'
import './stylesheets/style.scss'


class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Layout>
        <Route exact path="/" component={HomeTodo}/>
        <Route exact path="/show" component={ShowTodo}/>
      </Layout>
    )
  }
}

export default App