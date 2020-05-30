import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'
import API from './api';
import './App.css';

class App extends React.Component {

  async componentDidMount() {
    const res = await API.get('games/')
    console.log(res.data)
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
