
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import ChooseGelato from './components/ChooseGaleto';
import Orders from './components/Orders';
import Business from './components/Business';
import Connect from './components/Connect';
import Footer from './components/Footer';
import DropdownHeader from './components/DropdownHeader';




function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <DropdownHeader/>
      <HeroSection/>
      <Orders/>
      <ChooseGelato/>
      <Business/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
