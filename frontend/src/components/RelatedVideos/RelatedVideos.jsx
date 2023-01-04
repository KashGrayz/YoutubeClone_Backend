import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function RelatedVideos({featuredVideo, setFeaturedVideo}) {
    const[relatedVideos, setRelatedVideos] = useState([]);

    

    async function getRelatedVideos() {
        debugger;
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${featuredVideo[0]?.id?.videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`);
        setRelatedVideos(response.data.items);
        console.log(response.data);
        }

        // Test video id: TLu1bScP4Fk

    useEffect(() => {
        getRelatedVideos();
    }, [featuredVideo])
    
    function handleClick(video) {
        setFeaturedVideo(video);
        }
    

  return (
    <div>
        <div className = 'thumbnails'>
            {relatedVideos.map((el, index) => {
            return(
                <div> 
                    <iframe 
                        className = 'thumbnail-item'
                        key = {index}
                        id="ytplayer"
                        type="text/html"
                        width="300"
                        height="169"
                        src={`https://www.youtube.com/embed/${el?.id.videoId}?&origin=http://example.com`}
                        frameborder="0">  
                    </iframe>
                    {/* <button onClick= {() => {handleClick(el)}}>
                        {<img src={el.img} width="300" height="175" alt ='thumbnail of song video'></img> }
                    </button> */}
                </div>)})}
        </div>
    </div>
  )
}
