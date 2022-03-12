import React from 'react';
import Home from './home/Home';
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";

// import Blogs component
import Blogs from "./blog/Blogs";
// import Projects component
import Projects from "./project/Projects";
// import Web3 component
import Web3 from "./web3/Web3";

function App() {
  return (
    <>
    <Router>
        <Routes>
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route exact path="/" element={<Home />} />
          
        {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
        <Route path="/Blogs" element={<Blogs />} />
          
        {/* This route is for contactus component
        with exact path "/contactus", in 
        component props we passes the imported component*/}
        <Route path="/Projects" element={<Projects />} />
  
        {/* This route is for contactus component
        with exact path "/contactus", in 
        component props we passes the imported component*/}
        <Route path="/Web3" element={<Web3 />} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App;
