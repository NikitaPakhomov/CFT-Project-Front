import React from 'react';

const Comment = (props) => {
    console.log(props.commentInfo);
    return <div className="comment">
        {props.commentInfo.user} написал {props.commentInfo.message}
    </div>;
}



export default Comment;