import React, { useState } from 'react';

export default function RelatedVideos() {
    const[relatedVideos, setRelatedVideos] = useState([]);

    async function getRelatedVideos(videoId) {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`);
        setRelatedVideos(response.data.items);
        console.log(response.data);
        }
    
    

  return (
    <div>

    </div>
  )
}
