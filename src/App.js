import React from 'react';
import "./App.css"

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';




const App = () => {
  return (
    <>
    <div className="main">

    <Sidebar />
      <Home />
      <About />

    </div>
      
    
      
      
      

  
      
    </>
  )
}

export default App