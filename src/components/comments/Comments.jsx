import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../../Comment/Comment';


const propTypes = {};

const defaultProps = {};


class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div className="comments">
            <form className="comments__form">
                <input type="text" placeHolder="Время для нового комментария!!!!!!!!" />
                <button type="submit" on>Отправить</button>
            </form>
            <div className="comments__allcomments">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>;
    }
}



export default Comments;