
import React from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import SearchBar from '../../components/SearchBar/SearchBar';
import CommentList from '../../components/Comments/CommentList';

const LandingPage = ({getVideoBySearchTerm, featuredVideo, setFeaturedVideo, criteria, setCriteria, comment, setComment, comments, setComments, text, setText}) => {



    // return (
    //     <div>

    //         <SearchBar criteria = {criteria} setCriteria = {setCriteria} getVideoBySearchTerm = {getVideoBySearchTerm} featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo}/>
        
    //         <h3 className = 'welcome'>Welcome to Vid.io</h3>
        
    //         <VideoPlayer criteria = {criteria} setCriteria = {setCriteria} getVideoBySearchTerm = {getVideoBySearchTerm} featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} className = 'featured'/>
        
    //         <RelatedVideos featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} className = 'thumbnails'/>


      return (
    <div className = 'featured-and-related'>
 
        <SearchBar criteria = {criteria} setCriteria = {setCriteria} getVideoBySearchTerm = {getVideoBySearchTerm} featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo}/>
      
        <h3 className = 'welcome'>Welcome to Vid.io!</h3>
        
        <VideoPlayer criteria = {criteria} setCriteria = {setCriteria} getVideoBySearchTerm = {getVideoBySearchTerm} featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} className = 'featured'/>
        
        <RelatedVideos featuredVideo = {featuredVideo} setFeaturedVideo = {setFeaturedVideo} className = 'thumbnails'/>

        <div className = 'comment-text'>

          <CommentList comment = {comment} setcomment = {setComment} comments = {comments} setComments = {setComments} text = {text} />

        </div>




        </div>
    );
};

export default LandingPage;

