import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize = 9;

  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  } 

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
              color='#f11946'
              progress={this.state.progress}
              height={3}
          />
          <Routes>
              <Route exact path="/" element={<News setProgress = {this.setProgress}  key="general" toptitle="Top Headlines - " pageSize={this.pageSize} country="us" category="general"/>}/>
              <Route exact path="/business" element={<News setProgress = {this.setProgress}  key="business" toptitle="Top Headlines - " pageSize={this.pageSize} country="us" category="business"/>}/>
              <Route exact path="/entertainment" element={<News setProgress = {this.setProgress}  key="entertainment" toptitle="Top Headlines - " pageSize={this.pageSize} country="us" category="entertainment"/>}/>
              <Route exact path="/health" element={<News setProgress = {this.setProgress}  key="health" toptitle="Top Headlines - " pageSize={this.pageSize} country="us" category="health"/>}/>
              <Route exact path="/science" element={<News setProgress = {this.setProgress}  key="science" toptitle="Top Headlines - " pageSize={this.pageSize} country="us" category="science"/>}/>
              <Route exact path="/sports" element={<News setProgress = {this.setProgress}  key="sports" toptitle="Top Headlines - " pageSize={this.pageSize} country="us" category="sports"/>}/>
              <Route exact path="/technology" element={<News setProgress = {this.setProgress}  key="technology" toptitle="Top Headlines - " pageSize={this.pageSize} country="us" category="technology"/>}/>
          </Routes> 
        </Router>
      </div>
    )
  }
}
