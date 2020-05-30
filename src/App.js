import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'
import API from './api';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       games: []
    }
  }
  

  async componentDidMount() {
    const res = await API.get('games/')
    this.setState({games: res.data})
  }

  render() {
    console.log(this.state.games)
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
