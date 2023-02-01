import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News toptitle="TOP HEADLINES TODAY" pageSize="9"/>
      </div>
    )
  }
}
