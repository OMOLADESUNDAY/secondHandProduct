import './App.css';
import Navbar from './component/Navbar';
import SearchNav from './component/SearchNav';
import TopAdvert from './component/TopAdvert';

function App() {
  return (
    <div className="App">
      <TopAdvert/>
      <SearchNav/>
      <Navbar/>
    </div>
  );
}

export default App;
