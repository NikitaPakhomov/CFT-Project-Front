import React from 'react';
import { withRouter } from 'react-router-dom';
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
                <button className="filminfo__btn" onClick={() => this.props.setActiveTrailer(filminfo.id)}>Посмотреть трейлер</button>
            </div >
        )
    }
}
export default withRouter(Film);