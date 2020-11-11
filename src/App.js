import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Pages/Home/Home';
import Bottom from './Component/Bottom/Bottom';
import Kitchen from './Component/Pages/Categories/Kitchen/Kitchen';
import Bedroom from './Component/Pages/Categories/Bedroom/Bedroom';
import Bathroom from './Component/Pages/Categories/Bathroom/Bathroom';
import LivingRoom from './Component/Pages/Categories/Living Room/LivingRoom';
import Categories from './Component/Pages/Categories/Categories';
import Contact from './Component/Pages/Contact/Contact' ;
import About from './Component/Pages/About/About' ;

const App = () => {
  return (
    <div className="App">
      <section>
      <Router>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/Contact' exact component={Contact} />
          <Route path = '/Categories' exact component = {Categories} />
          <Route path= '/Categories/Kitchen' component = {Kitchen} />
          <Route path= '/Categories/Bedroom' component = {Bedroom} />
          <Route path= '/Categories/LivingRoom' component = {LivingRoom} />
          <Route path= '/Categories/Bathroom' component = {Bathroom} />

    </Switch>
    </Router>
      </section>
    <Bottom />
    </div>
  );
}

export default App;
