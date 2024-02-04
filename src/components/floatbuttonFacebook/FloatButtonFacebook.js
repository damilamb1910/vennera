import React from 'react'
import './floatButtonFacebook.css'

const FloatButtonFacebook = () => {
    const handleClickFloat=(e)=>{
        if(e.target.attributes.id.value==='floatButton'){
            window.open('https://www.facebook.com/VenneraLuthier', '_blank')
          }
    }
  return (
    <div>
       <img onClick={handleClickFloat} id='floatButton' className='floatButton__img' src={require('../../assets/img/facebook.png')} alt="" />
    </div>
  )
}

export default FloatButtonFacebook
