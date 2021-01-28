import React from 'react';
import './FilmsRow.scss';
import PropTypes from 'prop-types';
import axios from 'axios';
import Film from '../film/Film';

const propTypes = {};

const defaultProps = {};

class FilmsRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = { films: [1, 2] };
    }
    componentDidMount() {
        axios.get('http://localhost:8080/films').then(response => {
            const films = response.data.movies;
            this.setState({ films });
        })
    }
    render() {
        return <div className="filmRow">
            {this.state.films.map(filminfo => (< Film filminfo={filminfo} key={filminfo.id} />))}

        </div>;
    }
}

FilmsRow.propTypes = propTypes;
FilmsRow.defaultProps = defaultProps;

export default FilmsRow;