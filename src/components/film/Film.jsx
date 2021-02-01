/* eslint-disable */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../button/Button';
import './Film.scss';
import plus from '../../images/plus.svg';
import tomorrowRequest from '../../api/tomorrow';
import UserContext from '../../contexts/user-context';

class Film extends React.Component {
    static contextType = UserContext;

    postCollection = () => {
      const { id } = this.props.filminfo;
      const { user } = this.context;
      const obj = { id, user };
      tomorrowRequest.post('/usercollection', obj).then(() => {
      });
    }

    render() {
      const { filminfo } = this.props;
      return (
        <div className="film">
          <div className="filminfo" key={this.props.key} onClick={() => this.props.history.push(`/films/${filminfo.id}`)}>
            <div className="filminfo__img-cont">
              <img className="filminfo__img" src={filminfo.poster} alt="" />
              {' '}
            </div>
            <div className="filminfo__name">{filminfo.title}</div>
          </div>
          {this.props.option || this.context.user == 'anonim' ? '' : <div className="film__plusBtn-cont" onClick={() => { this.postCollection(); this.props.clickChecker(); }}><img src={plus} alt="plus" className="film__plusBtn" /></div>}
          <Button text="Посмотреть трейлер" setActiveTrailer={() => this.props.setActiveTrailer(filminfo.trailer)} />
        </div>
      );
    }
}
export default withRouter(Film);
