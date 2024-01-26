import React from 'react'
import FloatButtonWhatsapp from '../floatbuttonWhatsapp/FloatButtonWhatsapp'
import FloatButtonFacebook from '../floatbuttonFacebook/FloatButtonFacebook'
import FloatButtonInstagram from '../floatbuttonInstagram/FloatButtonInstagram'
import './floatButtons.css'

const FloatButtons = () => {
  return (
    <div className='floatButtons'>
      <FloatButtonWhatsapp/>
      <FloatButtonFacebook/>
      <FloatButtonInstagram/>
    </div>
  )
}

export default FloatButtons
