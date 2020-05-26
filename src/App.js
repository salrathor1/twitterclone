import React from 'react';
import './App.css';
import Feed from './components/Feed';
import MainNav from './components/MainNav';
import Mobile from './components/Mobile';
import Trends from './components/Trends';

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
