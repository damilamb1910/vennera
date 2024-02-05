import React, { useEffect, useState } from 'react'
import './home.css'
import logo from "../assets/img/logo.png"
import Loading from '../Loading/Loading'

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
    setLoading(true)
  },[])
  const [loading,setLoading]=useState(true)
  const cambiarLoad=()=>{
    setLoading(false)
  }
  const cambiarYoutube=()=>{
    if(youtubeIsActive===false){
      setYoutubeIsActive(true)
    }else if(youtubeIsActive===true){
      setYoutubeIsActive(false)
    }
    
  }
  const [youtubeIsActive,setYoutubeIsActive]=useState(false)
  const handleClickFloat=(e)=>{
    
        window.open('https://wa.me/541136029521?text=¡Hola!+Quiero+averiguar+por+un+presupuesto', '_blank')
     
}

  return (
    <div className='home__container '>
     <Loading loading={loading}/>
      <img onLoad={cambiarLoad} className='home__logo' src={logo} alt="" />
      <div onClick={cambiarYoutube} className='solucion__container'>
      <h3>¡Todo tiene solución! </h3>
      <div className={ `youtube__container ${youtubeIsActive && 'youtubeIsActive'}`   }>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/N5I7YGRxJvE?si=fYF9_2UgI8tujkn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#692AE8" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
</svg>
      </div>
     
      <button onClick={handleClickFloat}>PEDI TU PRESUPUESTO</button>
    </div>
  )
}

export default Home
