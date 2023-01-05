import React, { useState , useEffect} from 'react';
import axios from 'axios';

export default function VideoPlayer({getVideoBySearchTerm, featuredVideo, setFeaturedVideo, criteria, setCriteria}) {

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');

    async function getTitle(){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${featuredVideo[0]?.id.videoId}&key=AIzaSyBbGwyZU134Y8hFVjyuTvl7U4mmP9GYQ5Y`)
        setTitle(response.data.items[0].snippet.title)
        setDescription(response.data.items[0].snippet.description)
    } 

    useEffect(() => {
      getTitle();
    }, [featuredVideo])
    

    return (
    <div>
        <iframe
            className="video"
            id="ytplayer"
            type="text/html"
            width="854"
            height="480"
            src={`https://www.youtube.com/embed/${featuredVideo[0]?.id.videoId}?autoplay=1&mute=1&origin=http://example.com`}
            frameborder="0">
        </iframe>
        <div className = 'video-info'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

