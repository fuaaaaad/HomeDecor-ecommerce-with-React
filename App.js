import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Pages/Home/Home';
import Bottom from './Component/Bottom/Bottom';

const App = () => {
  return (
    <div className="App">
      <section>
      <Router>

        <Switch>
          <Route path='/' exact component={Home} />
    
    </Switch>
    </Router>
      </section>
    <Bottom />
    </div>
  );
}

export default App;
