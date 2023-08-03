// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =() => {
  // const [pageSize, setpageSize] = useState(12)
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <BrowserRouter>
      <Navbar/>
      <LoadingBar color='#7ECC49'
      height= {3}
      progress={progress}
       />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={9} country="in" category="general" />}></Route>
        {/* <Route exact path="/about" element={<News setProgress={setProgress} key="about" pageSize={9} country="in" category="about" />}></Route> */}
        <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={9} country="in" category="business" />}></Route>
        <Route exact path="/sports" element={ <News setProgress={setProgress} key="sports" pageSize={9} country="in" category="sports" />}></Route>
        <Route exact path="/health" element={ <News setProgress={setProgress} key="health" pageSize={9} country="in" category="health" />}></Route>
        <Route exact path="/technology" element={ <News setProgress={setProgress} hey="technology" pageSize={9} country="in" category="technology" />}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    )
  }

export default App;