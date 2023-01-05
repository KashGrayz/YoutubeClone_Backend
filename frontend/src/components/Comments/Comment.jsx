import React from 'react'

export default function Comment({user, likes, dislikes, text}) {

//! TO DO: this is where like and dislike buttons go.
    console.log(`user in Comment = ${user}`)
  return (
    <div>
        <hr></hr>
        <div className = 'comment'>
            <b>{user.username}</b>
            <p>{text}</p>
            <p>Likes: {likes}</p>
            <p>Dislikes: {dislikes}</p>
        </div>
    </div>
  )
}
