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
  const handleClickFloat=(e)=>{
    
        window.open('https://wa.me/541136029521?text=¡Hola!+Quiero+averiguar+por+un+presupuesto', '_blank')
     
}

  return (
    <div className='home__container'>
     <Loading loading={loading}/>
      <img onLoad={cambiarLoad} className='home__logo' src={logo} alt="" />
      <h3>Expertos en reparación de instrumentos de cuerda.</h3>
      <button onClick={handleClickFloat}>PEDI TU PRESUPUESTO</button>
    </div>
  )
}

export default Home
