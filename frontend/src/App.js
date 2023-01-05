
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
const [user, token] = useAuth();
const[criteria, setCriteria] = useState();
const[comments, setComments] = useState([]); 


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
    
  


  return (
    <div>
      <Navbar />
      <Routes>

      <Route path="/" element={
        <PrivateRoute>
            <HomePage featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} getVideoBySearchTerm = {getVideoBySearchTerm} criteria = {criteria} setCriteria = {setCriteria} comments = {comments} setComments = {setComments} user={user} token={token}/>
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
