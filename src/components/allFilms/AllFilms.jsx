import React from 'react';
import FilmsRow from '../filmsRow/FilmsRow';
import './AllFilms.scss';

class AllFilms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div className='allfilms'>
            <FilmsRow h="Все фильмы" url="films" />
            <FilmsRow h="Фильмы месяца" url="topfilms" />
            <FilmsRow h="Фильмы, которые вы добавили в подборку" />

        </div>;
    }
}

export default AllFilms;