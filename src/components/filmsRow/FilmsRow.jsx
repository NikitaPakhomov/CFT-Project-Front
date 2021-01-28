import React from 'react';
import './FilmsRow.scss';
import PropTypes from 'prop-types';
import tomorrowRequest from '../../api/tomorrow';
import Film from '../film/Film';
import Trailer from '../trailer/Trailer';

const propTypes = {};

const defaultProps = {};

class FilmsRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [1, 2],
            activeTrailer: 0
        };
    }

    setActiveTrailer = (value) => {
        this.setState({ activeTrailer: value });
    }

    componentDidMount() {
        tomorrowRequest.get('/films').then(response => {
            const films = response.data.movies;
            this.setState({ films });
        })
    }
    render() {
        return <div className="filmRowAndTrailer">
            <div className="filmRow">
                {this.state.activeTrailer > 0 ?
                    <Trailer setActiveTrailer={this.setActiveTrailer} URL="https://www.youtube-nocookie.com/embed/XtMThy8QKqU?controls=0" /> :
                    this.state.films.map(filminfo => (< Film filminfo={filminfo} key={filminfo.id} setActiveTrailer={this.setActiveTrailer} />))}
            </div>
        </div>;
    }

}

FilmsRow.propTypes = propTypes;
FilmsRow.defaultProps = defaultProps;

export default FilmsRow;