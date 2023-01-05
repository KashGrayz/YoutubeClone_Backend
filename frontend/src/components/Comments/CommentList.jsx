import React from 'react';
import Comment from './Comment';
import useAuth from '../../hooks/useAuth';

export default function CommentList({comment, comments, setComments, user, token, likes, dislikes, text, getComments}) {

    console.log(`username in CommentList ${user.username}`)
  
    return (
        <div>
        {comments.map((el, index) => {
        return (
            <div>
                <div key = {index}></div>
                <div><Comment user = {user} likes = {el.likes} dislikes = {el.dislikes} text = {el.text} token = {el.token} comments = {comments} setComments = {setComments} className = 'comment'/>
            </div>
        </div>
        );
    })}   
    </div>
  );
};
