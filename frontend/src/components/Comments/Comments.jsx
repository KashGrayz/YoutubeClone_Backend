import React, { useState } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";


export default function Comments({featuredVideo, comment, setComment, handleSubmit}) {

  const [user, token] = useAuth();

  function handleSubmit(event){
    event.preventDefault();
    let newComment = {
      comment: comment,
  }
    postComment(newComment);
}

async function postComment(commentToPost) {

  try{
    let res = await axios.post(`http://127.0.0.1:8000/api/comments/${featuredVideo[0]?.id.videoId}`, commentToPost, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
      if(res.status === 201){
        console.log(res);   
      }
  }
  catch (error) {
      alert('Sorry! We have encounered an error processing your request!');
    }
  }

    

  return (
    <div>
      <div className = 'comments-text'></div>
      {/* <div className = 'comments-search'> */}
        <form onSubmit ={handleSubmit} className = 'search'>
            <input className = 'search-input' type = 'text' onChange={(event) => setComment(event.target.value)} value = {comment}>
            </input>
            <button  type = 'submit'>Post</button>
        </form>
      {/* </div> */}
    </div>
  

  )
}
