import React from 'react';
import Carousels from './Content/Carousels';
import Navbar from '../../Navbar/Navbar';
import './Home.css';
import NonMoving from './NonMoving.js';

const Home = () => {
  return (
    <div className="Home">
      <div className = 'beforeNav'></div>
      <Navbar />    
      <Carousels />

      <section >
      <div   style = {{height: '50vh'}}>
      <p > There are four main types of writing: expository, descriptive, persuasive, and narrative. Each serves a specific purpose and differs from the others in particular ways. Knowing the difference between the writing styles is useful in essay writing because your essay must serve a precise purpose</p>
      </div>
      <div  className = 'grid' style = {{height: '50vh'}}>
      

      </div> 
     </section> 
    <NonMoving />

    </div>
  );
}

export default Home;

/*
for box: 
<div className = 'box'>
        <img style = {{maxHeight: '250px'}} src={require("../../../Assets/bg.jpg")}/>
      </div>
      <div className = 'box'>
        <img src={require("../../../Assets/bg1.jpg")}/>
      </div>      <div className = 'box'>
        <img src={require("../../../Assets/bg2.jpg")}/>
      </div>      <div className = 'box'>
        <img src={require("../../../Assets/bg2.jpg")}/>
      </div> */