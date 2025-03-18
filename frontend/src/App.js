import './App.css';
import Blog from './component/Blog';
import Faq from './component/Faq';
import FeaturedProduct from './component/FeaturedProduct';
import Footer from './component/Footer';
import Navbarr from './component/Navbar';
import Promo from './component/Promo';
import SearchNav from './component/SearchNav';
import Sponsors from './component/Sponsors';
import Todaydeal from './component/Todaydeal';
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
      <Todaydeal/>
      <Sponsors/>
      <Blog/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
