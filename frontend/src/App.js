
// General Imports
import { Routes, Route } from "react-router-dom";
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

import { useEffect, useState } from "react";
import axios from "axios";
//sets central content in homepage according to search by search term input in form. Uses default to supply inititial value.


function App() {
// const[featuredVideo, setFeaturedVideo] = useState(relatedData);
const[featuredVideo, setFeaturedVideo] = useState([{id: { kind: "youtube#video", videoId: "TLu1bScP4Fk" }}]);

const[criteria, setCriteria] = useState();


  async function getVideoBySearchTerm(searchTerm) {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyBbGwyZU134Y8hFVjyuTvl7U4mmP9GYQ5Y`);
    setFeaturedVideo(response.data.items);
    console.log(response.data.items);
    }
    
      
    
    
    


  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={
          <PrivateRoute>
              <HomePage featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} getVideoBySearchTerm = {getVideoBySearchTerm} criteria = {criteria} setCriteria = {setCriteria}/>
          </PrivateRoute>}/>

        <Route path="/register" element={<RegisterPage/>} />

        <Route path="/login" element={<LoginPage/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
