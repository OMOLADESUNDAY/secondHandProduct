import './App.css';
import Navbarr from './component/Navbar';
import SearchNav from './component/SearchNav';
import TopAdvert from './component/TopAdvert';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <TopAdvert/>
      <SearchNav/>
      <Navbarr/>
      <Home/>
    </div>
  );
}

export default App;
