/* eslint-disable */
import React from 'react';
import "./Comment.scss";
import shef from "../../images/shef.jpg";
import admin from "../../images/admin.jpg";

const Comment = (props) => {
    return <div className="comment">
        <div className="comment__user">
            <div className="comment__img-cont"><img className="comment__img" src={props.commentInfo.user == "anonim" ? shef : admin} alt="" /></div>
            <div className="comment__name">{props.commentInfo.user}</div>
        </div>
        <div className="comment__message">{props.commentInfo.message}</div>
    </div>;
}



export default Comment;