import React, { useState , useEffect} from 'react';


export default function VideoPlayer({getVideoBySearchTerm, featuredVideo, setFeaturedVideo, criteria, setCriteria}) {

    return (
    <div>
        <iframe
            className="video"
            id="ytplayer"
            type="text/html"
            width="854"
            height="480"
            //hard coded video id test:
            // src={`https://www.youtube.com/embed/XXYlFuWEuKI?autoplay=1&mute=1&origin=http://example.com`}
            // src={`https://www.youtube.com/embed/${featuredVideo?.items[0]?.id.videoId}?autoplay=1&mute=1&origin=http://example.com`}
            src={`https://www.youtube.com/embed/${featuredVideo[0]?.id.videoId}?autoplay=1&mute=1&origin=http://example.com`}
            frameborder="0">
        </iframe>
    </div>
  )
}

