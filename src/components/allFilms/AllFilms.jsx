import React from 'react';
import FilmsRow from '../filmsRow/FilmsRow';
import './AllFilms.scss';
import UserContext from './../../contexts/user-context';

class AllFilms extends React.Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div className='allfilms'>
            <FilmsRow h="Все фильмы" url="films" />
            <FilmsRow h="Фильмы месяца" url="topfilms" />
            <FilmsRow h="Фильмы, которые вы добавили в подборку" url="usercollection" option={this.context.user} />

        </div>;
    }
}

export default AllFilms;