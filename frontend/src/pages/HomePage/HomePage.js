import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import Comments from "../../components/Comments/Comments";
import SearchBar from "../../components/SearchBar/SearchBar";


const HomePage = ({getVideoBySearchTerm, featuredVideo, setFeaturedVideo, criteria, setCriteria, user, token}) => {
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

  const[comment, setComment] = useState('')




  return (
    <div className = 'featured-and-related'>
 
        <SearchBar criteria = {criteria} setCriteria = {setCriteria} getVideoBySearchTerm = {getVideoBySearchTerm} featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo}/>
      
        <h3 className = 'welcome'>Welcome {user.username}!</h3>
        
        <VideoPlayer criteria = {criteria} setCriteria = {setCriteria} getVideoBySearchTerm = {getVideoBySearchTerm} featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} className = 'featured'/>
        
        <RelatedVideos featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} className = 'thumbnails'/>

        <Comments featuredVideo = {featuredVideo} comment = {comment} setComment = {setComment} className = 'comments'/>

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
