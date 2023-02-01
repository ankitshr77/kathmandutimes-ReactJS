import React, { Component } from 'react'
import loading from './loading.gif'
import '../App.css'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading spinner" className='loadingspinner'></img>
      </div>
    )
  }
}
