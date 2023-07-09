import React, { useEffect, useState } from 'react'
import './RowPost.css'
import {API_KEY, imageUrl } from '../../constants/Constants'
import axios from '../../axios'
import Youtube from 'react-youtube'
function RowPost(props) {
  const [Movie,setMovie]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((res)=>{
      console.log(res.data)
      setMovie(res.data.results)
    })
  },[])
  
  const handleMovie=(id)=>{
    
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
        console.log(res)
        if(res.data.results.length!=0){
          setUrlId(res.data.results[0])
        }else{
          console.log("No data Availabe" )
        }
      })
   }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='row'>
       <h2>{props.title}</h2>
       <div className="posters">

           {
             Movie.map((movie)=>(
               <img onClick={()=>handleMovie(movie.id)} className={props.isSmall?'smallPoster':'posterImg'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
               
             ))
           }
       </div>
       {urlId && <button className='closeButton' onClick={()=>setUrlId("")}>Close X</button>}
       {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
