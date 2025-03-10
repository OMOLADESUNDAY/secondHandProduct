import './App.css';
import Navbarr from './component/Navbar';
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
    </div>
  );
}

export default App;
