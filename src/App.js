import React from 'react'

import './App.css';
import Header from './components/header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './components/main/Main';
import Top from './components/top/Top';
import FullFilm from './components/fullFilm/FullFilm';
import AllFilms from './components/allFilms/AllFilms';
import Auth from './components/auth/Auth';
import Login from './components/login/Login';
import UserContext from './contexts/user-context';
import Logout from './components/logout/Logout';


class App extends React.Component {
  state = {
    authenticated: localStorage.getItem('authenticated') || false,
    user: localStorage.getItem('user') || "anonim",
    image: "https://i.pinimg.com/originals/c3/6c/30/c36c30accc811453cc3b70c56f7334fa.png",
  }
  togglesAuthentication = () => {
    this.setState({ authenticated: !this.state.authenticated });
  }
  setUserName = (user) => {
    this.setState({ user: user });
  }
  setImage = (img) => {
    this.setState({ authenticated: img });
  }
  render() {
    return (
      <div className="App" >
        <UserContext.Provider value={{
          authenticated: this.state.authenticated,
          user: this.state.user,
          image: this.state.image,
          togglesAuthentication: this.togglesAuthentication,
          setUserName: this.setUserName,
          setImage: this.setImage,
        }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/films" component={AllFilms} />
            <Route path="/films/:filmId" component={FullFilm} />
            <Route path="/top" component={Top} />
            <Route path="/login" component={Login} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/newcomment" />
            {/* <Redirect to="/" /> */}
          </Switch>
        </UserContext.Provider>
      </div >
    );
  }
}

export default App;
