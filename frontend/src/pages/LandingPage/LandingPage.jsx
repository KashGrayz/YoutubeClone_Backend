
import React from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import SearchBar from '../../components/SearchBar/SearchBar';

const LandingPage = ({getVideoBySearchTerm, featuredVideo, setFeaturedVideo, criteria, setCriteria}) => {

    return (
        <div>

            <SearchBar criteria = {criteria} setCriteria = {setCriteria} getVideoBySearchTerm = {getVideoBySearchTerm} featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo}/>
        
            <h3 className = 'welcome'>Welcome to Vid.io</h3>
        
            <VideoPlayer criteria = {criteria} setCriteria = {setCriteria} getVideoBySearchTerm = {getVideoBySearchTerm} featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} className = 'featured'/>
        
            <RelatedVideos featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} className = 'thumbnails'/>

        </div>
    );
};

export default LandingPage;

