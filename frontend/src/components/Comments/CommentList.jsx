import React from 'react';
import Comment from './Comment';
import useAuth from '../../hooks/useAuth';

export default function CommentList({comment, comments, user, token, likes, dislikes, text}) {


  return (
    <div>
    {comments.map((el, index) => {
    return (
        <div>
            <div key = {index}></div>
            <div><Comment likes = {el.likes} dislikes = {el.dislikes} text = {el.text} token = {el.token} className = 'comment'/>
            </div>
        </div>
        );
    })}   
    </div>
  );
};
