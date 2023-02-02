import React from 'react'
import loading from './loading.gif'
import '../App.css'

const Spinner = ()=> {
  
    return (
      <div className='text-center my-4'>
        <img src={loading} alt="loading spinner" className='loadingspinner'></img>
      </div>
    )
}

export default Spinner
