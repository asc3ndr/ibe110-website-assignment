import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
import About from './About'
import Contact from './Contact'
import Board from './Board'
import Image from './Image'
import Eval from './Eval'

function App() {
  return (
    <div className='App'>
      <div className='App-container'>
        <nav className='App-nav'>
          <NavLink exact activeClassName='active-link' to='/board'>Play</NavLink>
          <NavLink exact activeClassName='active-link' to='/'>About</NavLink>
          <NavLink exact activeClassName='active-link' to='/contact'>Contact</NavLink>
          <NavLink exact activeClassName='active-link' to='/image'>Image</NavLink>
          <NavLink exact activeClassName='active-link' to='/eval'>Eval</NavLink>
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
            chanceLightStartsOn={0.5}
          />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
