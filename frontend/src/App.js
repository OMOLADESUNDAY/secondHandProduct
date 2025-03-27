import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Navbarr from './component/Navbar';
import SearchNav from './component/SearchNav';
import TopAdvert from './component/TopAdvert';
import HomeContainer from './pages/HomeContainer';
import SingleProduct from './pages/SingleProduct';
import Product from './pages/Product'
import About from './pages/About';
import Category from './pages/Category';
function App() {
  return (
    <div className="App">
      <TopAdvert/>
      <SearchNav/>
      <Navbarr/>
      <Routes>
        <Route path='/' element={<HomeContainer/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shippingpolicy' element={<SingleProduct/>}/>
        <Route path='/refundpolicy' element={<SingleProduct/>}/>
        <Route path='/shippingpolicy'  element={<SingleProduct/>}/>
        <Route path='/contact'  element={<SingleProduct/>}/>
        <Route path='/location'  element={<SingleProduct/>}/>
        <Route path='/termsofservice'  element={<SingleProduct/>}/>
        <Route path='/category'  element={<Category/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
