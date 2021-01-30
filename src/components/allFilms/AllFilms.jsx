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
            <FilmsRow />
            <FilmsRow />
            <FilmsRow />

        </div>;
    }
}

export default AllFilms;