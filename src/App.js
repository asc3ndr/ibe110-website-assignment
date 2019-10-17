import React, { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
import About from './About'
import Contact from './Contact'
import Board from './Board'
import Image from './Image'
import Help from './Help'

function App() {
  const [appState, setAppState] = useState({ neon: true, board: { rows: 5, cols: 5 } });
  const toggleLights = () => {
    setAppState(appState.neon ? { ...appState, neon: false } : { ...appState, neon: true });
  }
  const toggleBoard = () => {
    if (appState.board.rows === 5) {
      setAppState({ ...appState, board: { rows: 3, cols: 3 } });
    }
    else if (appState.board.rows === 3) {
      setAppState({ ...appState, board: { rows: 4, cols: 4 } });
    }
    else if (appState.board.rows === 4) {
      setAppState({ ...appState, board: { rows: 5, cols: 5 } });
    }
  }
  return (
    <div className='App'>
      <div className='App-nav-container'>
        <nav className='App-nav'>
          <NavLink exact activeClassName={appState.neon ? 'neon' : 'yellow'} className={appState.neon ? 'flux' : ''} to='/board'>Play</NavLink>
          <NavLink exact activeClassName={appState.neon ? 'neon' : 'yellow'} className={appState.neon ? 'flux' : ''} to='/help'>Help</NavLink>
          <NavLink exact activeClassName={appState.neon ? 'neon' : 'yellow'} className={appState.neon ? 'flux' : ''} to='/'>About</NavLink>
          <NavLink exact activeClassName={appState.neon ? 'neon' : 'yellow'} className={appState.neon ? 'flux' : ''} to='/contact'>Contact</NavLink>
          <NavLink exact activeClassName={appState.neon ? 'neon' : 'yellow'} className={appState.neon ? 'flux' : ''} to='/image'>Image</NavLink>
          <NavLink id='light-toggle' className={appState.neon ? 'flux' : ''} onClick={() => toggleLights()} to='#'>Toggle<br />Neon</NavLink>
        </nav>
      </div>
      <div className='App-content'>
        <Switch>
          <Route exact path='/' render={About} />
          <Route exact path='/contact' render={Contact} />
          <Route exact path='/image' render={Image} />
          <Route exact path='/help' render={Help} />
          <Route exact path='/board' component={() => <Board
            nRows={appState.board.rows}
            nCols={appState.board.cols}
            nShuffles={10}
            neon={appState.neon}
            toggle={toggleBoard}
          />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
