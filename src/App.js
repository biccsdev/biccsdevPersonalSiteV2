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
// import Old Site component
import OldSite from "./OldSite";

function App() {
  return (
    <>
    <Router>
        <Routes>
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route exact path="/" element={<Home />} />
          
        {/* This route is for Blogs component 
        with exact path "/Blogs", in component 
        props we passes the imported component*/}
        <Route path="/Blogs" element={<Blogs />} />
          
        {/* This route is for Projects component
        with exact path "/Projects", in 
        component props we passes the imported component*/}
        <Route path="/Projects" element={<Projects />} />
  
        {/* This route is for Web3 component
        with exact path "/Web3", in 
        component props we passes the imported component*/}
        <Route path="/Web3" element={<Web3 />} />

        {/* This route is for Oldsite component
        with exact path "/Oldsite", in 
        component props we passes the imported component*/}
        <Route path="/Oldsite" element={<OldSite />} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App;
