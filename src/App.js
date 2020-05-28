import React from 'react';
import './App.css';
import Feed from './components/feed.js';
import MainNav from './components/mainnav.js';
import Mobile from './components/mobile.js';
import Trends from './components/trends.js';

class App extends React.Component {
  //states

  //methods
  
  //render
  render() {
    return (
      <div>
        <div className="wrapper">
        <MainNav />
        <Feed />
        <Trends />
        </div>
        <div className=" wrapper mobile visible">        
          <Mobile />
        </div>

      </div>
    )
  }
}

export default App;
