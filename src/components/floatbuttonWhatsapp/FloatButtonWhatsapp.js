import React from 'react'
import './floatButtonWhatsapp.css'

const FloatButtonWhatsapp = () => {
    const handleClickFloat=(e)=>{
        if(e.target.attributes.id.value==='floatButton'){
            window.open('https://wa.me/541136029521?text=¡Hola!+Quiero+averiguar+por+un+presupuesto', '_blank')
          }
    }
  return (
    <div>
       <img onClick={handleClickFloat} id='floatButton' className='floatButton__img' src={require('../../assets/img/whatsapp.png')} alt="" />
    </div>
  )
}

export default FloatButtonWhatsapp
