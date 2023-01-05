import React from 'react';
import Comment from './Comment';

export default function CommentList({comment, comments, setComments, user,}) {

    return (
        <div>
        {comments.map((el, index) => {
        return (
            <div>
                <div key = {index}></div>
                <div><Comment user = {el.user} likes = {el.likes} dislikes = {el.dislikes} text = {el.text} token = {el.token} comments = {comments} setComments = {setComments} className = 'comment'/>
            </div>
        </div>
        );
    })}   
    </div>
  );
};
