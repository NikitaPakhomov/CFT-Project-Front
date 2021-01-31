import React from 'react';
import "./Comment.scss";

const Comment = (props) => {
    return <div className="comment">
        <div className="comment__user">
            <div className="comment__img-cont"><img src="" alt="" /></div>
            <div className="comment__name">{props.commentInfo.user}</div>
        </div>
        <div className="comment__message">{props.commentInfo.message}</div>
    </div>;
}



export default Comment;