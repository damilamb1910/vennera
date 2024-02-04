import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import './loading.css'

const Loading = ({loading}) => {
  return (
    <>
   
    <div className={loading ? 'loading__container' : 'loading__none'}>
      <PacmanLoader
        color={"#E88C2A"} loading={loading} size={100}
        
      
/>
    </div>
    </>
    
    
    
  )
}

export default Loading
