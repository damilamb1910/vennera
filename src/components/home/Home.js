import React, { useEffect, useState } from 'react'
import './home.css'
import logo from "../assets/img/logo.png"
import Loading from '../Loading/Loading'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/img/roturas/1.jpg'
import img2 from '../../assets/img/roturas/2.jpg'
import img3 from '../../assets/img/roturas/3.jpg'
import img4 from '../../assets/img/roturas/4.jpg'
import img5 from '../../assets/img/roturas/5.jpg'
import img6 from '../../assets/img/roturas/6.jpg'
import img7 from '../../assets/img/roturas/7.jpg'
import img8 from '../../assets/img/roturas/8.jpg'
import img9 from '../../assets/img/roturas/9.jpg'
import img10 from '../../assets/img/roturas/10.jpg'
import img11 from '../../assets/img/roturas/11.jpg'
import img12 from '../../assets/img/roturas/12.jpg'
import img13 from '../../assets/img/roturas/13.jpg'
import img14 from '../../assets/img/roturas/14.jpg'
import img15 from '../../assets/img/roturas/15.jpg'
import img16 from '../../assets/img/roturas/16.jpg'
import Modal from 'react-bootstrap/Modal';


const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    window.scrollTo(0, 0);
    setLoading(true)
  },[])
  const [loading,setLoading]=useState(true)
  const cambiarLoad=()=>{
    setLoading(false)
  }
  
  const imagenes=[
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16
    

  ]
  
  const handleClickFloat=(e)=>{
    
        window.open('https://wa.me/541136029521?text=¡Hola!+Quiero+averiguar+por+un+presupuesto', '_blank')
     
}

  return (
    <div className='home__container '>
     <Loading loading={loading}/>
      <img onLoad={cambiarLoad} className='home__logo' src={logo} alt="" />
      <div onClick={handleShow} className='solucion__container'>
      <h3>¡Todo tiene solución! </h3>
      
      
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#692AE8" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
</svg>
      </div>
      <Modal
      centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
        <Modal.Title>¡Todo tiene solución!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
      {imagenes.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
        </Modal.Body>
      </Modal>
      <button onClick={handleClickFloat}>PEDI TU PRESUPUESTO</button>
    </div>
  )
}

export default Home
