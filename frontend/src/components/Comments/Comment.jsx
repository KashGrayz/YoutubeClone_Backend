import React from 'react'

export default function Comment({user, likes, dislikes, text}) {

//! TO DO: this is where like and dislike buttons go.

  return (
    <div >
        <p>{likes}</p>
        <p>{dislikes}</p>
        <p>{text}</p>
    </div>
  )
}
