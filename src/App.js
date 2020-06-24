import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Introduce from './pages/Introduce'
import Knowledge from './pages/Knowledge'
import Robot from './pages/Robot'
import NotFound from './pages/NotFound'

import {Route,Switch} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/introduce' component={Introduce} />
        <Route exact path='/knowledge' component={Knowledge}/>
        <Route exact path='/robot' component={Robot} />
        <Route component={NotFound} />
      </Switch>
    </  > 
  );
}

export default App;
