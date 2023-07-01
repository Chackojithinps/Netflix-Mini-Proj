import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../../constants/Constants'
import axios from '../../axios'
function Banner() {
  const [Movie,setMovie] =useState()
  
  useEffect(()=>{
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      // console.log(res.data.results[0])
      
      setMovie(res.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])

     })
  },[])
  
  return (
    <div
     style={{backgroundImage:`url(${Movie?imageUrl+Movie.backdrop_path:null})`}}
     className='banner'>
        <div className='content'>
            <h1 className='banner_buttons'>{Movie?Movie.title:null}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{Movie?Movie.overview:null}</h1>
            
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
