import React, {Component} from 'react'
import { Route } from 'react-router'
import HomeTodo from './HomeTodo'
import Layout from './Layout'
import './stylesheets/style.scss'


class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Layout>
        <Route exact path="/home" component={HomeTodo}/>
      </Layout>
    )
  }
}

export default App