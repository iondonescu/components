import React from 'react';


//props este un obiect care contine toate atributele tag-ului CommentDetails
const CommentDetail = function (props) {
    
    return (
        <div className="comment">
            <a href="/" className="avatar">
            <img alt="avatar" src={props.imageAvatar}/>
            </a>
            <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
           
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.textComment}</div>
            </div>
        </div>
    );
};

// ce-i creat de mana omului trebuie exportat

export default CommentDetail;