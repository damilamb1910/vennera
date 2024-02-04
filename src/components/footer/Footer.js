import React from 'react'
import './footer.css'
import logo from '../../assets/img/logo.png'

const Footer = () => {
  const mapStyle = {
    width: '600px',
    height: '600px',
    border: '0',
  };
  

  return (
    <footer>
      <div className='subfooter__container'>
      <div className='maps__container'>
      <h4>Visitanos con previo aviso. ¡Te esperamos para descubrir el arte de la luthería!</h4>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.809578896724!2d-58.58582492425844!3d-34.634252072943255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9aa9c4523f5%3A0xd1b6fec65920487d!2sVennera%20Luthier!5e0!3m2!1ses-419!2sar!4v1706238060978!5m2!1ses-419!2sar"  style={mapStyle} allowFullScreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      <div className='datos'>
      <img className='logo__footer' src={logo} alt="" />
      <h6>Lacroze 764, Villa Sarmiento, Morón, Buenos Aires, Argentina</h6>
      <h6>1167819269 / 1136029521</h6>
      <h6>venneraluthier@gmail.com</h6>
      </div>
      </div>

      
      
      
      


        <h4>Hecho por mi. © 2023</h4>


    </footer>
      
      
    
  )
}

export default Footer
