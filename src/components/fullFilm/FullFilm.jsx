import React from 'react';
import './FullFilm.scss';
import tomorrowRequest from '../../api/tomorrow';
import Comments from '../comments/Comments';

class FullFilm extends React.Component {
    state = {
        title: '',
    };
    componentDidMount() {
        tomorrowRequest.get(`/films/${this.props.match.params.filmId}`).then(response => {
            const filminfo = response.data;
            console.log(filminfo);
            this.setState({
                ...filminfo

            });
        })
    }
    smile = "(；⌣̀_⌣́) Я ничего не нашел";

    render() {
        return <div className="fullfilm">
            <h1 className="fullfilm__title">{this.state.title}</h1>
            <div className="fullfilm__img-cont"><img className="fullfilm__img" src={this.state.poster} alt="" /></div>
            <div className="fullfilm__sunmaininfo">
                <div className="fullfilm__genres">Жанр: {this.state.genres || this.smile}</div>
                <div className="fullfilm__actors">Актеры: {this.state.actors || this.smile}</div>
                <div className="fullfilm__composers">Композиторы: {this.state.composers || this.smile}</div>
            </div>
            <div className="fullfilm__description">Описание: {this.state.description || this.smile}</div>
            <Comments />
        </div>;
    }
}


export default FullFilm;