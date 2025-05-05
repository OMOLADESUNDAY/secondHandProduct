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
import { products } from "./data";
import SingleCategory from './pages/SingleCategory';
import Blogg from './pages/Blog';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './component/Cart';
import ShippingAddress from './pages/ShippingAddress';
import Payment from './pages/Payment';
import ResponsiveNavbar from './component/ResponsiveNavbar';
function App() {
  return (
    <div className="App">
      <TopAdvert/>
      {/* <SearchNav/> */}
      <ResponsiveNavbar/>
      <Navbarr/>
      <Routes>
        <Route path='/' element={<HomeContainer/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/category/:id' element={<SingleCategory />}/>
        <Route path='/product' element={<Product products={products}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blogg/>}/>
        <Route path='/shippingpolicy' element={<SingleProduct/>}/>
        <Route path='/refundpolicy' element={<SingleProduct/>}/>
        <Route path='/shippingpolicy'  element={<SingleProduct/>}/>
        <Route path='/contact'  element={<SingleProduct/>}/>
        <Route path='/location'  element={<SingleProduct/>}/>
        <Route path='/termsofservice'  element={<SingleProduct/>}/>
        <Route path='/category'  element={<Category/>}/>
        <Route path='/register'  element={<Register/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/shippingaddress'  element={<ShippingAddress/>}/>
        <Route path='/payment'  element={<Payment/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
