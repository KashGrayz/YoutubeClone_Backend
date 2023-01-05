
// General Imports
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "./hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import LandingPage from "./pages/LandingPage/LandingPage";
//sets central content in homepage according to search by search term input in form. Uses default to supply inititial value.


function App() {
// const[featuredVideo, setFeaturedVideo] = useState(relatedData);
const[featuredVideo, setFeaturedVideo] = useState([{id: { kind: "youtube#video", videoId: "TLu1bScP4Fk" }}]);

//criteria is the search term.
const[criteria, setCriteria] = useState();

//comment is the new comment created with the post axios call.
const[comment, setComment] = useState();

//comments is the list of previously extant comments.
const[comments, setComments] = useState([]); 

//user is the whole object user
const [user, token] = useAuth();





async function getComments(){
  try{
    let res = await axios.get(`http://127.0.0.1:8000/api/comments/${featuredVideo[0]?.id.videoId}/all/`);
    console.log(res.data);
    setComments(res.data.reverse()); 
  }
  catch (error) {
    console.log(error)
    alert('Sorry! We have encountered an error posting your comment!');
  }
}




//retrieves a video by criteria/search term, sets as featuredVideo.
  async function getVideoBySearchTerm(searchTerm) {
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyBbGwyZU134Y8hFVjyuTvl7U4mmP9GYQ5Y`);
      if (response.status === 400){
        alert('The term you searched for does not exist. Please try another search.');
      }
      
      else{
        setFeaturedVideo(response.data.items);
      }
    }
    catch (error) {
        alert('Youtube API queries exhausted. Try again tomorrow.');
      }
    }
    

//immedeately fetches all comments posted to the featured video
useEffect(() => {
  getComments();
}, [featuredVideo])





  


  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={
          <PrivateRoute>
              <HomePage featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} getVideoBySearchTerm = {getVideoBySearchTerm} criteria = {criteria} setCriteria = {setCriteria} comments = {comments} setComments = {setComments} user = {user} token = {token} getComments = {getComments} comment = {comment} setComment = {setComment} />
          </PrivateRoute>}/>

      <Route path="/register" element={<RegisterPage/>} />

      <Route path="/login" element={<LoginPage/>} />

      <Route path="/landing" element={<LandingPage featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} getVideoBySearchTerm = {getVideoBySearchTerm} criteria = {criteria} setCriteria = {setCriteria} />} />
      </Routes>
      
      {/* <Footer /> */}
      
      
      

      
          
    </div>
  );
}

export default App;
