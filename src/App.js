import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



function App() {
  const [dbtn, setDbtn] = useState("Enable Dark Mode")
  const [mode, setMode] = useState("dark")

  const toggleMode = () =>{
    if(mode==='dark'){
      setMode('light')
      setDbtn("Disable Dark Mode")
      document.body.style.backgroundColor = "#212529"
      document.body.style.color="black"
    } 
    else{
      setMode('dark')
      setDbtn("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      document.body.style.color="black"

    }
    
  }

  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar dbtn={dbtn} toggleMode={toggleMode}/>
          <LoadingBar
              color='#f11946'
              progress={progress}
              height={3}
          />
          <Routes>
              <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey}  key="general"  toptitle="Top Headlines - " pageSize={pageSize} country="us" mode={mode} toggleMode={toggleMode} dbtn={dbtn} category="general"/>}/>

              <Route exact path="/business" element={<News setProgress = {setProgress} apiKey={apiKey}  key="business"  toptitle="Top Headlines - " pageSize={pageSize} country="us" mode={mode} toggleMode={toggleMode} dbtn={dbtn} category="business"/>}/>

              <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey={apiKey}  key="entertainment"  toptitle="Top Headlines - " pageSize={pageSize} country="us" mode={mode} toggleMode={toggleMode} dbtn={dbtn} category="entertainment"/>}/>

              <Route exact path="/health" element={<News setProgress = {setProgress} apiKey={apiKey}  key="health"  toptitle="Top Headlines - " pageSize={pageSize} country="us" mode={mode} toggleMode={toggleMode} dbtn={dbtn} category="health"/>}/>

              <Route exact path="/science" element={<News setProgress = {setProgress} apiKey={apiKey}  key="science"  toptitle="Top Headlines - " pageSize={pageSize} country="us" mode={mode} toggleMode={toggleMode} dbtn={dbtn} category="science"/>}/>

              <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey={apiKey}  key="sports"  toptitle="Top Headlines - " pageSize={pageSize} country="us" mode={mode} toggleMode={toggleMode} dbtn={dbtn} category="sports"/>}/>

              <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey={apiKey}  key="technology"  toptitle="Top Headlines - " pageSize={pageSize} country="us" mode={mode} toggleMode={toggleMode} dbtn={dbtn} category="technology"/>}/>
          </Routes> 
        </Router>
      </div>
    )
  
}

export default App;
