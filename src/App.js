import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<News key="general" toptitle="Top Headlines - " pageSize="9" country="us" category="general"/>}/>
              <Route exact path="/business" element={<News key="business" toptitle="Top Headlines - " pageSize="9" country="us" category="business"/>}/>
              <Route exact path="/entertainment" element={<News key="entertainment" toptitle="Top Headlines - " pageSize="9" country="us" category="entertainment"/>}/>
              <Route exact path="/health" element={<News key="health" toptitle="Top Headlines - " pageSize="9" country="us" category="health"/>}/>
              <Route exact path="/science" element={<News key="science" toptitle="Top Headlines - " pageSize="9" country="us" category="science"/>}/>
              <Route exact path="/sports" element={<News key="sports" toptitle="Top Headlines - " pageSize="9" country="us" category="sports"/>}/>
              <Route exact path="/technology" element={<News key="technology" toptitle="Top Headlines - " pageSize="9" country="us" category="technology"/>}/>
          </Routes> 
        </Router>
      </div>
    )
  }
}
