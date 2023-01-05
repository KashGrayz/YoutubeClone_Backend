import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import CommentForm from "../../components/Comments/CommentForm";
import CommentList from "../../components/Comments/CommentList";

const HomePage = ({getVideoBySearchTerm, featuredVideo, setFeaturedVideo, criteria, setCriteria, comments, setComments, user, token, getComments, comment, setComment}) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  // const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);

  const[text, setText] = useState('');
  const[video_id, setVideoId] = useState('');
  const[likes, setLikes] = useState(0);
  const[dislikes, setDislikes] = useState(0);

  return (
    <div className = 'featured-and-related'>
 
        <SearchBar criteria = {criteria} setCriteria = {setCriteria} getVideoBySearchTerm = {getVideoBySearchTerm} featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo}/>
      
        <h3 className = 'welcome'>Welcome {user.username}!</h3>
        
        <VideoPlayer criteria = {criteria} setCriteria = {setCriteria} getVideoBySearchTerm = {getVideoBySearchTerm} featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} className = 'featured'/>
        
        <RelatedVideos featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} className = 'thumbnails'/>

        <div className = 'comment-text'>

          <CommentForm comment = {comment} comments = {comments} setComments = {setComments} featuredVideo = {featuredVideo} text = {text} setText = {setText} user = {user} token = {token} likes = {likes} setLikes = {setLikes} dislikes = {dislikes} setDislikes = {setDislikes} getComments = {getComments}/> 

          <CommentList comment = {comment} setcomment = {setComment} comments = {comments} setComments = {setComments} user = {user} token = {token} likes = {likes} setLikes = {setLikes} dislikes = {dislikes} setDislikes = {setDislikes} text = {text} video_id = {video_id} setVideoId = {setVideoId}  />

        </div>

      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}

    </div>
  );
};

export default HomePage;
