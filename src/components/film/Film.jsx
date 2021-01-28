import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../button/Button';
import "./Film.scss";

class Film extends React.Component {
    render() {
        const { filminfo } = this.props;
        return (
            <div className="film">
                <div className="filminfo" key={this.props.key} onClick={() => this.props.history.push(`/films/${filminfo.id}`)}>
                    <div className="filminfo__img-cont"><img className="filminfo__img" src={filminfo.poster} alt="" /></div>
                    <div className="filminfo__name">{filminfo.title}</div>
                </div >
                <Button text='Посмотреть трейлер' setActiveTrailer={() => this.props.setActiveTrailer(filminfo.id)} />
            </div >
        )
    }
}
export default withRouter(Film);