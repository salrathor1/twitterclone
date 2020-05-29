import React from 'react';
import './App.css';
import Feed from './components/Feed.js';
import MainNav from './components/Mainnav.js';
import Mobile from './components/Mobile.js';
import Trends from './components/Trends.js';

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
