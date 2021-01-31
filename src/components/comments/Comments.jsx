import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment';
import tomorrowRequest from '../../api/tomorrow';
import UserContext from './../../contexts/user-context';
import "./Comments.scss";


const propTypes = {};

const defaultProps = {};


class Comments extends React.Component {
    static contextType = UserContext;
    state = {
        comments: [],
        text: '',
        user: this.context.user || "anonim"
    };
    postForm = (e) => {
        e.preventDefault();
        let { text, user } = this.state;
        let obj = { text, user }
        console.log(obj);
        tomorrowRequest.post(`/films/${this.props.id}`, obj).then(response => {
            console.log(response.data);
            this.setState({
                comments: response.data
            });
        })
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    componentDidMount() {
        tomorrowRequest.get(`/films/${this.props.id}`).then(response => {
            let comments = response.data[1];
            this.setState({
                comments
            });
        })
    }
    render() {
        console.log(this.context);
        return <div className="comments">
            <form className="comments__form" onSubmit={this.postForm}  >
                <div className="comments__name">{this.context.user}</div>
                <input className="comments__input" type="text" placeHolder="Время для нового комментария!!!!!!!!" name="text" onChange={this.handleInputChange} />
                <button className="comments__btn" type="submit" on>Отправить</button>
            </form>
            <div className="comments__allcomments">
                {this.state.comments ? this.state.comments.map((info) => {
                    return <Comment commentInfo={info} />
                }) : ''}
            </div>
        </div >;
    }
}



export default Comments;