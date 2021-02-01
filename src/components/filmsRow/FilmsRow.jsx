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
            activeTrailer: 0,
            checked: this.props.checked
        };
    }

    setActiveTrailer = (url) => {
        this.setState({ activeTrailer: url });
    }
    update = () => {
        this.setState({ checked: this.props.checked })
    }

    componentDidMount() {
        let { url, option } = this.props;
        if (option) {
            option = '/' + option;
        } else {
            option = "";
        }
        tomorrowRequest.get(`/${url}${option}`).then(response => {
            const films = response.data.movies || response.data || [];
            this.setState({ films });
        })
    }
    render() {
        return <div className="filmRowAndTrailer">
            <h2>{this.props.h}</h2>
            <div className="filmRow">
                {this.state.activeTrailer != 0 ?
                    <Trailer setActiveTrailer={this.setActiveTrailer} trailer={this.state.activeTrailer} URL="https://www.youtube-nocookie.com/embed/XtMThy8QKqU?controls=0" /> :
                    this.state.films.map(filminfo => (< Film filminfo={filminfo} key={filminfo.id} setActiveTrailer={this.setActiveTrailer} option={this.props.option} clickChecker={this.props.clickChecker} />))}
            </div>
        </div>;
    }

}

FilmsRow.propTypes = propTypes;
FilmsRow.defaultProps = defaultProps;

export default FilmsRow;