import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage'
import Header from './Components/Header/Header'
import './App.css';
import API from './api';
import UserContext from './Context/UserContext';

class App extends React.Component {
  static contextType = UserContext

  async componentDidMount() {
    this.context.clearError()
    const res = await API.get('/app-load')
    .catch(e => this.context.setError(e.message))
    this.context.setGames(res.data.gameData)
    this.context.setGenres(res.data.genreData)
  }

  render() {
    return (
      <div className="App">
        <Header />
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
