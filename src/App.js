import React from 'react';
import './App.css';
import Feed from './components/feed';
import MainNav from './components/mainnav';
import Mobile from './components/mobile';
import Trends from './components/trends';

class App extends React.Component {
  //states

  //methods
  
  //render
  render() {
    return (
      <div className="wrapper">
        <MainNav />
        <Feed />
        <Trends />
      </div>
    )
  }
}

export default App;
