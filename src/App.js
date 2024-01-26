import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import FloatButtons from './components/floatButtons/FloatButtons';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Home/>
    <FloatButtons/>
    <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
