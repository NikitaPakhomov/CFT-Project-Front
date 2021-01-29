import './App.css';
import Header from './components/header/Header';
import FilmsRow from './components/filmsRow/FilmsRow';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './components/main/Main';
import Top from './components/top/Top';
import FullFilm from './components/fullFilm/FullFilm';
import AllFilms from './allFilms/AllFilms';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path="/" component={Main} />
        <Route exact path="/films" component={AllFilms} />
        <Route path="/films/:filmId" component={FullFilm} />
        <Route path="/top" component={Top} />
        <Route path="/newcomment" />
        <Redirect to="/" />
      </Switch>

    </div >
  );
}

export default App;
