import React from 'react';
import './FilmsRow.scss';
import PropTypes from 'prop-types';
import axios from 'axios';

const propTypes = {};

const defaultProps = {};

class FilmsRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = { films: [1, 2] };
    }
    componentDidMount() {
        axios.get('http://localhost:8080/films').then(response => {
            console.log(response.data);
            const films = response.data.movies;
            this.setState({ films });
        })
    }
    render() {
        this.state.films.map(element => {
            console.log(element);
        })

        return <div className="filmRow">
            {this.state.films.map(element => {
                return <div className="filmRow__film" key={element.num}>
                    <div className="filmRow__img-cont"><img className="filmRow__img" src={element.poster} alt="" /></div>
                    <div className="filmRow__name">{element.title}</div>

                </div>
            })}
        </div>;
    }
}

FilmsRow.propTypes = propTypes;
FilmsRow.defaultProps = defaultProps;

export default FilmsRow;