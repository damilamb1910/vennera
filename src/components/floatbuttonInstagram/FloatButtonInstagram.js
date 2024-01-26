import React from 'react'
import './floatButtonInstagram.css'

const FloatButtonInstagram = () => {
    const handleClickFloat=(e)=>{
        if(e.target.attributes.id.value==='floatButton'){
            window.open('https://wa.me/541167526139?text=¡Hola!+Querio+averiguar+por+un+presupuesto', '_blank')
          }
    }
  return (
    <div>
       <img onClick={handleClickFloat} id='floatButton' className='floatButton__img' src={require('../../assets/img/instagram.png')} alt="" />
    </div>
  )
}

export default FloatButtonInstagram
