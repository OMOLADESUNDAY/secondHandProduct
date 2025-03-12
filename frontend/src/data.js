import ps5 from './assest/s-l500__1_-removebg-preview.png'
import iphone from './assest/iphone.webp'
import healthproduct from './assest/health product1 (1).webp'
import phoneImage1 from './assest/phones/26be56634ad9773c9d8f6315cac2cba7.jpg'
import phoneImage2 from './assest/phones/44dbf3252affe1b050eef4b7ea01c988.jpg'
import phoneImage3 from './assest/phones/b8fcc5765adc68978faa5900116eea27.jpg'
import phoneImage4 from './assest/phones/black-iphone-with-time-it-is-10-15_1279154-1515.jpg'
import phoneImage5 from './assest/phones/black-modern-smartphone_143092-313.jpg'
import healthImage1 from './assest/health product/istockphoto-1017680574-612x612.jpg'
import healthImage2 from './assest/health product/istockphoto-1205850790-612x612.jpg'
import healthImage3 from './assest/health product/istockphoto-1311515424-612x612.jpg'
import healthImage4 from './assest/health product/istockphoto-1469733208-612x612.jpg'
import healthImage5 from './assest/health product/MultiHealth-12pack-400x400.jpg'
import shoeImage1 from './assest/phones/26be56634ad9773c9d8f6315cac2cba7.jpg'
import shoeImage2 from './assest/phones/44dbf3252affe1b050eef4b7ea01c988.jpg'
import shoeImage3 from './assest/phones/b8fcc5765adc68978faa5900116eea27.jpg'
import shoeImage4 from './assest/phones/black-iphone-with-time-it-is-10-15_1279154-1515.jpg'
import shoeImage5 from './assest/phones/black-modern-smartphone_143092-313.jpg'
import shoeImage1 from './assest/health product/istockphoto-1017680574-612x612.jpg'
import healthImage2 from './assest/health product/istockphoto-1205850790-612x612.jpg'
import healthImage3 from './assest/health product/istockphoto-1311515424-612x612.jpg'
import healthImage4 from './assest/health product/istockphoto-1469733208-612x612.jpg'
import healthImage5 from './assest/health product/MultiHealth-12pack-400x400.jpg'
import phoneImage1 from './assest/phones/26be56634ad9773c9d8f6315cac2cba7.jpg'
import phoneImage2 from './assest/phones/44dbf3252affe1b050eef4b7ea01c988.jpg'
import phoneImage3 from './assest/phones/b8fcc5765adc68978faa5900116eea27.jpg'
import phoneImage4 from './assest/phones/black-iphone-with-time-it-is-10-15_1279154-1515.jpg'
import phoneImage5 from './assest/phones/black-modern-smartphone_143092-313.jpg'
import healthImage1 from './assest/health product/istockphoto-1017680574-612x612.jpg'
import healthImage2 from './assest/health product/istockphoto-1205850790-612x612.jpg'
import healthImage3 from './assest/health product/istockphoto-1311515424-612x612.jpg'
import healthImage4 from './assest/health product/istockphoto-1469733208-612x612.jpg'
import healthImage5 from './assest/health product/MultiHealth-12pack-400x400.jpg'
export const welcomeData='Welcome To Our Store'
export const trendingCategoryData=[
    {id:1,img:ps5,name:'Electronics',linkname1:'Video Games',linkname2:'Computers',linkname3:'Television',linkname4:'Washing Machine'},
    {id:2,img:iphone,name:'Phones',linkname1:'Iphones',linkname2:'Samsungs',linkname3:'Gionees',linkname4:'Haiwei'},
    {id:3,img:healthproduct,name:'Health Products',linkname1:'Enlargement Pill',linkname2:'Skin Care pill',linkname3:'Multi-Vitamins',linkname4:'Supplement'},
]

export const products = [
    // Phones
    { category: 'phones',id:1, name: 'Smartphone X1', image: 'phone_x1.jpg', price: 799, no_of_stock: 50, brand: 'TechCo', screen_size: '6.5 inch' },
    { category: 'phones',id:2, name: 'Budget Phone A2', image: 'phone_a2.jpg', price: 249, no_of_stock: 120, brand: 'ValueTech', screen_size: '6.0 inch' },
    { category: 'phones',id:3, name: 'Premium Phone Z3', image: 'phone_z3.jpg', price: 1299, no_of_stock: 25, brand: 'EliteMobile', screen_size: '6.8 inch' },
    { category: 'phones',id:4, name: 'Rugged Phone R4', image: 'phone_r4.jpg', price: 499, no_of_stock: 80, brand: 'ToughTech', screen_size: '6.2 inch' },
    { category: 'phones',id:5, name: 'Foldable Phone F5', image: 'phone_f5.jpg', price: 1599, no_of_stock: 15, brand: 'FlexiMobile', screen_size: '7.0 inch' },
    // Electronics
    { category: 'electronics',id:6, name: '4K Smart TV', image: 'tv.jpg', price: 899, no_of_stock: 30, brand: 'VisionTech', screen_size: '55 inch', type: 'LED' },
    { category: 'electronics',id:7, name: 'Wireless Headphones', image: 'headphones.jpg', price: 149, no_of_stock: 100, brand: 'AudioPro', type: 'Over-ear' },
    { category: 'electronics',id:8, name: 'Laptop Pro 15', image: 'laptop.jpg', price: 1199, no_of_stock: 40, brand: 'CompTech', cpu: 'Intel i7' },
    { category: 'electronics',id:9, name: 'Digital Camera', image: 'camera.jpg', price: 599, no_of_stock: 60, brand: 'PhotoMax', resolution: '24MP' },
    { category: 'electronics',id:10, name: 'Smartwatch', image: 'watch.jpg', price: 299, no_of_stock: 70, brand: 'WearTech', features: ['Heart rate monitor', 'GPS'] },
    // Health Products
    { category: 'health product',id:11, name: 'Vitamin C 1000mg', image: 'vitamins.jpg', price: 19.99, no_of_stock: 200, brand: 'VitaPlus', quantity: '100 tablets' },
    { category: 'health product',id:12, name: 'Protein Powder', image: 'protein.jpg', price: 39.99, no_of_stock: 80, brand: 'MuscleMax', weight: '2 lbs' },
    { category: 'health product',id:13, name: 'Fitness Tracker', image: 'tracker.jpg', price: 79.99, no_of_stock: 90, brand: 'FitLife', features: ['Step counter', 'Sleep monitor'] },
    { category: 'health product',id:14, name: 'Essential Oils Set', image: 'oils.jpg', price: 24.99, no_of_stock: 150, brand: 'AromaTherapy', quantity: '6 bottles' },
    { category: 'health product',id:15, name: 'Digital Thermometer', image: 'thermometer.jpg', price: 14.99, no_of_stock: 120, brand: 'HealthCheck', type: 'Infrared' },
    // Automobile
    { category: 'auto mobile',id:16, name: 'Car Wash Kit', image: 'car_wash.jpg', price: 29.99, no_of_stock: 75, brand: 'AutoShine', items: ['Soap', 'Sponge', 'Cloth'] },
    { category: 'auto mobile',id:17, name: 'Tire Pressure Gauge', image: 'gauge.jpg', price: 9.99, no_of_stock: 200, brand: 'DriveSafe', type: 'Digital' },
    { category: 'auto mobile',id:18, name: 'Car Battery Charger', image: 'charger.jpg', price: 69.99, no_of_stock: 40, brand: 'PowerDrive', voltage: '12V' },
    { category: 'auto mobile',id:19, name: 'Dash Cam', image: 'dashcam.jpg', price: 89.99, no_of_stock: 60, brand: 'RoadView', resolution: '1080p' },
    { category: 'auto mobile',id:20, name: 'Car Seat Covers', image: 'seat_covers.jpg', price: 49.99, no_of_stock: 90, brand: 'ComfortRide', material: 'Leather' },
    // Fashion
    { category: 'fashion',id:21, name: 'Men\'s T-Shirt', image: 'tshirt.jpg', price: 19.99, no_of_stock: 150, brand: 'StyleCo', size: ['S', 'M', 'L'], color: ['Black', 'White', 'Gray'] },
    { category: 'fashion',id:22, name: 'Women\'s Dress', image: 'dress.jpg', price: 49.99, no_of_stock: 80, brand: 'ElegantWear', size: ['XS', 'S', 'M'], color: ['Red', 'Blue'] },
    { category: 'fashion',id:23, name: 'Jeans', image: 'jeans.jpg', price: 39.99, no_of_stock: 100, brand: 'DenimStyle', size: ['30', '32', '34'], color: ['Blue', 'Black'] },
    { category: 'fashion',id:24, name: 'Sunglasses', image: 'sunglasses.jpg', price: 24.99, no_of_stock: 120, brand: 'VisionStyle', color: ['Black', 'Brown'] },
    { category: 'fashion',id:25, name: 'Scarf', image: 'scarf.jpg', price: 14.99, no_of_stock: 200, brand: 'WarmWear', material: 'Wool' },
    // Shoes
    { category: 'shoes',id:26, name: 'Running Shoes', image: 'running_shoes.jpg', price: 79.99, no_of_stock: 90, brand: 'RunFast', size: ['8', '9', '10'], color: ['Blue', 'Gray'] },
    { category: 'shoes',id:27, name: 'Casual Sneakers', image: 'sneakers.jpg', price: 59.99, no_of_stock: 110, brand: 'StreetStyle', size: ['7', '8', '9'], color: ['White', 'Black'] },
    { category: 'shoes',id:28, name: 'Dress Shoes', image: 'dress_shoes.jpg', price: 99.99, no_of_stock: 60, brand: 'FormalStep', size: ['9', '10', '11'], color: ['Black', 'Brown'] },
    { category: 'shoes',id:29, name: 'Boots', image: 'boots.jpg', price: 89.99, no_of_stock: 70, brand: 'AdventureFoot', size: ['8', '9', '10'], color: ['Brown', 'Tan'] },
    { category: 'shoes',id:30, name: 'Sandals', image: 'sandals.jpg', price: 39.99, no_of_stock: 150, brand: 'SummerWalk', size: ['7', '8', '9'], color: ['Brown', 'Beige'] },
    // Books
    { category: 'books', id:31, name: 'Fiction Novel', image: 'novel.jpg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction' },
    { category: 'books', id:32, name: 'Science Book', image: 'science_book.jpg', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science' },
    { category: 'books', id:33, name: 'Cookbook', image: 'cookbook.jpg', price: 24.99, no_of_stock: 60, author: 'Chef C', genre: 'Cookbook' },
    { category: 'books', id:34, name: 'Fiction Novel', image: 'novel.jpg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction' },
    { category: 'books', id:35, name: 'Science Book', image: 'science_book.jpg', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science' },
    { category: 'books', id:36, name: 'Cookbook', image: 'cookbook.jpg', price: 24.99, no_of_stock: 60, author: 'Chef C', genre: 'Cookbook' },
    { category: 'featured',id:37, name: 'Fiction Novel', image: 'novel.jpg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction' },
    { category: 'featured',id:38, name: 'Science Book', image: 'science_book.jpg', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science' },
    { category: 'featured',id:39, name: 'Cookbook', image: 'cookbook.jpg', price: 24.99, no_of_stock: 60, author: 'Chef C', genre: 'Cookbook' },
    { category: 'featured',id:40, name: 'Fiction Novel', image: 'novel.jpg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction' },
    { category: 'featured',id:41, name: 'Science Book', image: 'science_book.jpg', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science' },
    { category: 'featured',id:42, name: 'Cookbook', image: 'cookbook.jpg', price: 24.99, no_of_stock: 60, author: 'Chef C', genre: 'Cookbook' }
]