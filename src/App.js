import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       games: []
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
          exact
          path='/'
          component={LandingPage}
          />
        </Switch>
      </div>
    )
  };
}

export default App;
