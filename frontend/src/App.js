import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navbarr from './component/Navbar';
import SearchNav from './component/SearchNav';
import TopAdvert from './component/TopAdvert';
import HomeContainer from './pages/HomeContainer';

function App() {
  return (
    <div className="App">
      <TopAdvert/>
      <SearchNav/>
      <Navbarr/>
      <HomeContainer/>
      <Footer/>
      <Routes>
        <Route path='/about' />
      </Routes>
    </div>
  );
}

export default App;
