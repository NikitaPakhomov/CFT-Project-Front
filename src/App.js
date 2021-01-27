import './App.css';
import Header from './components/header/Header';
import FilmsRow from './components/filmsRow/FilmsRow';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './components/main/Main';
import Top from './components/top/Top';
import { AuthProvider } from './components/Auth/Auth';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <PrivateRoute path="/films" component={FilmsRow} />
          <PrivateRoute path="/top" component={Top} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </AuthProvider>
    </div >
  );
}

export default App;
