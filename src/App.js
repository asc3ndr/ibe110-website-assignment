import React, { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
import About from './About'
import Contact from './Contact'
import Board from './Board'
import Image from './Image'
import Eval from './Eval'

function App() {
  const [lightState, setLightState] = useState({ toggle: true });
  const toggleLights = () => {
    setLightState(lightState.toggle ? { toggle: false } : { toggle: true });
  }
  return (
    <div className='App'>
      <div className='App-nav-container'>
        <nav className='App-nav'>
          <NavLink exact activeClassName={lightState.toggle ? 'active-link' : 'yellow'} className={lightState.toggle ? 'flux' : ''} to='/board'>Play</NavLink>
          <NavLink exact activeClassName={lightState.toggle ? 'active-link' : 'yellow'} className={lightState.toggle ? 'flux' : ''} to='/'>About</NavLink>
          <NavLink exact activeClassName={lightState.toggle ? 'active-link' : 'yellow'} className={lightState.toggle ? 'flux' : ''} to='/contact'>Contact</NavLink>
          <NavLink exact activeClassName={lightState.toggle ? 'active-link' : 'yellow'} className={lightState.toggle ? 'flux' : ''} to='/image'>Image</NavLink>
          <NavLink exact activeClassName={lightState.toggle ? 'active-link' : 'yellow'} className={lightState.toggle ? 'flux' : ''} to='/eval'>Eval</NavLink>
          <NavLink id='light-toggle' className={lightState.toggle ? 'flux' : ''} onClick={() => toggleLights()} to='#'>Toggle<br />Neon</NavLink>
        </nav>
      </div>
      <div className='App-content'>
        <Switch>
          <Route exact path='/' render={About} />
          <Route exact path='/contact' render={Contact} />
          <Route exact path='/image' render={Image} />
          <Route exact path='/eval' render={Eval} />
          <Route exact path='/board' render={() => <Board
            nRows={5}
            nCols={5}
            nShuffles={10}
            neon={lightState.toggle}
          />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
