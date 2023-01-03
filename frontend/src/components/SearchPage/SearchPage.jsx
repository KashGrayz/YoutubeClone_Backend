import React, { useState , useEffect} from 'react';

import { useDebugValue } from 'react';



//fetch videos from the YouTube DATA API based on a provided search string and display in a centered iframe. 


export default function SearchPage({criteria, setCriteria, getVideoBySearchTerm, featuredVideo, setFeaturedVideo}) {


  function handleSubmit(event){
      event.preventDefault();
      getVideoBySearchTerm(criteria);
  }
    
  


  return (
    <div>
       <form onSubmit ={handleSubmit} className = 'search'>
            <input className = 'search-input' type = 'text' onChange={(event) => setCriteria(event.target.value)} value = {criteria}>
              
            </input>
            <button  type = 'submit'>Search</button>
      </form>

    </div>
  )
}

