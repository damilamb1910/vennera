
import logo from "../../assets/img/logo.png"
import "./Navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import OutsideAlerter from "../funciotn/OutsideAlert"
import { useEffect } from "react"


const Navbar=()=>{
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [isActive,setIsActive]=useState(true)
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = prevScrollPos > currentScrollPos;
    
        // Puedes hacer algo con la información, por ejemplo, imprimir en la consola
        if (isScrollingUp) {
          setIsActive(true);
        } else {
          setIsActive(false)
        }
    
        setPrevScrollPos(currentScrollPos);
      };
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        function handleResize() {
          setWindowSize(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {window.removeEventListener('resize', handleResize) 
         window.removeEventListener('scroll', handleScroll) };

      }, [prevScrollPos]);
    const comprobar=()=>{
        if(menu===true){
            toggleMenu()
        }
    }
    const variants = {
        open: { opacity: 1, y:-50 },
        closed: { opacity: 0, y:-100 },
      }
const cambiar=()=>{
    setDropdown(false)
}
    const [menu, setMenu]=useState(false)
    const toggleMenu=()=>{
        setMenu(!menu)
        
        
    }

    

    const [dropdown,setDropdown]=useState(false)
    return(
        <header className={isActive ? "" : "is-hidden"} onClick={comprobar}>
            <nav className='header__nav'>
                <ul className="nav__ul">
                <Link to={"/"}><li className="nav__item">Inicio</li></Link>
            <Link to={"/acerca"}><li className="nav__item">Nosotros</li></Link>
                </ul>
            
            </nav>
       
       <h1><span className='vennera'>Vennera </span><span className='luthier'> LUTHIER</span></h1>
       <button onClick={toggleMenu} className="menu-boton">
           <svg className="menu" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
  <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
           </button>
           <nav className={`header__nav ${menu ? 'isActive' : ''} `}>
            
            
{windowSize < 800 ? (
           <ul  className="nav__ul">
            <Link to={"/acerca"}><li className="nav__item">Inicio</li></Link>
                <Link to={'productos/musica'} ><li className="nav__item">Nosotros</li></Link> 
                <Link to={'productos/edicion'}><li className="nav__item">Servicios</li></Link>
            <li className="nav__item">Redes</li>
            
            </ul>
                ):(
                    <ul  className="nav__ul">
           
                    <li onClick={()=>{setDropdown(dropdown => !dropdown)}  } className="nav__item">Servicios
                <motion.nav
      animate={dropdown ? "open" : "closed"}
      variants={variants}
    >
        <OutsideAlerter cambiar={cambiar}>
        <ul className={`dropdown ${dropdown ? 'isActive': ''}`} >
                <Link to={'/productos/musica'} ><li>Música</li></Link> 
                <Link to={'/productos/edicion'}><li>Edición de video</li></Link>
                <Link to={'/productos/programacion'}><li>Programación</li></Link>
                <Link to={'/productos/ilustraciones'}><li>Ilustraciones digitales</li></Link>
            </ul>

        </OutsideAlerter>
           
    </motion.nav></li>
     
    <li onClick={()=>{window.open('https://damilamb1910.github.io/links/', '_blank');}} className="nav__item">Contacto</li>
            
            </ul>
    )}
            

            
           
        </nav>
       
        
        
    </header>
    )
}

export default Navbar