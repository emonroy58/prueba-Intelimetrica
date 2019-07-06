import React, {Component} from 'react';
import MapRestaurant  from './MapRestaurant'
import './App.css';

class App extends Component{

  render(){
    return(
      <div id='map'>
        <MapRestaurant />
      </div>
    );
  }
}

export default App;

