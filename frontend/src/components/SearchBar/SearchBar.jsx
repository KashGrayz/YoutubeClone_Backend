import React, { useState , useEffect} from 'react';

import axios from 'axios'
import { useDebugValue } from 'react';




export default function SearchBar() {
const[featuredVideo, setFeaturedVideo] = useState();

//fetch videos from the YouTube DATA API based on a provided search string. 
async function getVideoBySearchTerm(searchTerm = 'sunrise music') {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyAk1fEg8nzVaqIU93MYT_bI-mVMtOZM1Yo`);
    setFeaturedVideo(response.data);
    console.log(response.data);
    }


useEffect(() => {
    getVideoBySearchTerm();
    }, []);



  return (
    <div>
        <iframe
        className=""
        id="ytplayer"
        type="text/html"
        width="560"
        height="340"
        src={`https://www.youtube.com/embed/${featuredVideo?.items[0]?.id.videoId}?autoplay=1&mute=1&origin=http://example.com`}
        frameborder="0"></iframe>
    </div>
  )
}

