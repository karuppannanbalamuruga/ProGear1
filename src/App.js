import './App.css';
import AppBar from './Components/AppBar';
import Asked from './Components/Asked';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Save from './Components/Save';
import SmartCar from './Components/SmartCar';
import Trusted from './Components/Trusted';
import Works from './Components/Works';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <>
    <AppBar/>
    <Banner/>
    <SmartCar/>
    <Works/>
    <Save/>
    <Trusted/>
    <Asked/>
    <Footer/>
    </>
    
  );
}

export default App;
