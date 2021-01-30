import React from 'react'

import './App.css';
import Header from './components/header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './components/main/Main';
import Top from './components/top/Top';
import FullFilm from './components/fullFilm/FullFilm';
import AllFilms from './components/allFilms/AllFilms';
import Login from './components/login/Login';
import UserContext from './contexts/user-context';


class App extends React.Component {
  state = {
    authenticated: false
  }
  togglesAuthentication = () => {
    this.setState({ authenticated: !this.state.authenticated });
  }
  render() {
    return (
      <div className="App" >
        <UserContext.Provider value={{
          authenticated: this.state.authenticated,
          togglesAuthentication: this.togglesAuthentication
        }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/films" component={AllFilms} />
            <Route path="/films/:filmId" component={FullFilm} />
            <Route path="/top" component={Top} />
            <Route path="/login" component={Login} />
            <Route path="/newcomment" />
            <Redirect to="/" />
          </Switch>
        </UserContext.Provider>
      </div >
    );
  }
}

export default App;
