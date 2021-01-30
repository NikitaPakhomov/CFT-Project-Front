import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment';
import tomorrowRequest from '../../api/tomorrow';


const propTypes = {};

const defaultProps = {};


class Comments extends React.Component {
    state = {
        comments: [],
    };

    componentDidMount() {
        tomorrowRequest.get(`/films/${this.props.id}`).then(response => {
            const comments = response.data[1];
            this.setState({
                comments
            });
            console.log(this.state);
        })
    }
    render() {
        return <div className="comments">
            <form className="comments__form" method="post" action={`http://localhost:8080/films/${this.props.id}`}  >
                <input type="text" placeHolder="Время для нового комментария!!!!!!!!" name="text" />
                <button type="submit" on>Отправить</button>
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