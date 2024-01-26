import React from 'react'
import './home.css'
import logo from "../assets/img/logo.png"

const Home = () => {
  return (
    <div className='home__container'>
     
      <img className='home__logo' src={logo} alt="" />
      <h3>Expertos en reparación de instrumentos de cuerda.</h3>
      <button>PEDI TU PRESUPUESTO</button>
    </div>
  )
}

export default Home
