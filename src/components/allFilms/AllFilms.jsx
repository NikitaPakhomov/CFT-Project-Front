import React from 'react';
import FilmsRow from '../filmsRow/FilmsRow';
import './AllFilms.scss';
import UserContext from './../../contexts/user-context';

class AllFilms extends React.Component {
    static contextType = UserContext;
    state = {

    }

    clickChecker = () => {
        this.setState({ checked: this.state.checked + 1 });
    }
    render() {
        return <div className='allfilms'>
            <FilmsRow h="Все фильмы" url="films" clickChecker={this.clickChecker} />
            <FilmsRow h="Фильмы месяца" url="topfilms" />
            <FilmsRow h="Фильмы, которые вы добавили в подборку" url="usercollection" checked={this.state.checked} option={this.context.user} />

        </div>;
    }
}

export default AllFilms;