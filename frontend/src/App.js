import './App.css';
import FeaturedProduct from './component/FeaturedProduct';
import Navbarr from './component/Navbar';
import Promo from './component/Promo';
import SearchNav from './component/SearchNav';
import TopAdvert from './component/TopAdvert';
import Home from './pages/Home';
import TrendingCategory from './pages/TrendingCategory';

function App() {
  return (
    <div className="App">
      <TopAdvert/>
      <SearchNav/>
      <Navbarr/>
      <Home/>
      <TrendingCategory/>
      <FeaturedProduct/>
      <Promo/>
    </div>
  );
}

export default App;
