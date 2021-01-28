import React from 'react';
import './FullFilm.scss';
import tomorrowRequest from '../../api/tomorrow';

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
            <div>{this.state.title}</div>
            <div><img src={this.state.poster} alt="" /></div>
            <div>Актеры: {this.state.actors || this.smile}</div>
            <div>Композиторы: {this.state.composers || this.smile}</div>
            <div>Описание: {this.state.description || this.smile}</div>
            <div>Жанр: {this.state.genres || this.smile}</div>

        </div>;
    }
}


export default FullFilm;