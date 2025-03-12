import ps5 from './assest/s-l500__1_-removebg-preview.png'
import iphone from './assest/iphone.webp'
import healthproduct from './assest/health product1 (1).webp'

export const welcomeData='Welcome To Our Store'
export const trendingCategoryData=[
    {id:1,img:ps5,name:'Electronics',linkname1:'Video Games',linkname2:'Computers',linkname3:'Television',linkname4:'Washing Machine'},
    {id:2,img:iphone,name:'Phones',linkname1:'Iphones',linkname2:'Samsungs',linkname3:'Gionees',linkname4:'Haiwei'},
    {id:3,img:healthproduct,name:'Health Products',linkname1:'Enlargement Pill',linkname2:'Skin Care pill',linkname3:'Multi-Vitamins',linkname4:'Supplement'},
]

// export const products = [
//     // Phones
//     { category: 'phones',id:1, name: 'Smartphone X1', image: 'https://i.im.ge/2025/03/12/pdtOXC.26be56634ad9773c9d8f6315cac2cba7.jpeg', price: 799, no_of_stock: 50, brand: 'TechCo', screen_size: '6.5 inch' },
//     { category: 'phones',id:2, name: 'Budget Phone A2', image: 'https://i.im.ge/2025/03/12/pdt1iq.b8fcc5765adc68978faa5900116eea27.jpeg', price: 249, no_of_stock: 120, brand: 'ValueTech', screen_size: '6.0 inch' },
//     { category: 'phones',id:3, name: 'Premium Phone Z3', image: 'https://i.im.ge/2025/03/12/pdtSGP.black-modern-smartphone-143092-313.jpeg', price: 1299, no_of_stock: 25, brand: 'EliteMobile', screen_size: '6.8 inch' },
//     { category: 'phones',id:4, name: 'Rugged Phone R4', image: 'https://i.im.ge/2025/03/12/pdtq71.moscow-russia-august-30-2021-samsung-officially-launches-latest-flagship-smartphone-samsung-galaxy-flip-3-with-foldable-display-221513-4927.jpeg', price: 499, no_of_stock: 80, brand: 'ToughTech', screen_size: '6.2 inch' },
//     { category: 'phones',id:5, name: 'Foldable Phone F5', image: 'https://i.im.ge/2025/03/12/pdtapm.smartphone-vector-illustration-technology-advertising-element-easy-place-demo-screen-66219-1838.jpeg', price: 1599, no_of_stock: 15, brand: 'FlexiMobile', screen_size: '7.0 inch' },
//     // Electronics
//     { category: 'electronics',id:6, name: '4K Smart TV', image: 'https://i.im.ge/2025/03/12/pdtbC8.76f93b5e7932b2f6342ce0aa79a614a6.jpeg', price: 899, no_of_stock: 30, brand: 'VisionTech', screen_size: '55 inch', type: 'LED' },
//     { category: 'electronics',id:7, name: 'Wireless Headphones', image: 'https://i.im.ge/2025/03/12/pdtxe9.3088d3d597da816fe9862cd40cbaf1ce.jpeg', price: 149, no_of_stock: 100, brand: 'AudioPro', type: 'Over-ear' },
//     { category: 'electronics',id:8, name: 'Laptop Pro 15', image: 'https://i.im.ge/2025/03/12/pdtYDX.112740860f91b8b3b57f5a9de70a5b51.jpeg', price: 1199, no_of_stock: 40, brand: 'CompTech', cpu: 'Intel i7' },
//     { category: 'electronics',id:9, name: 'Digital Camera', image: 'https://i.im.ge/2025/03/12/pdtEcK.d5cd8d8d47b39cf28ea80cfc29418ffd-1.jpeg', price: 599, no_of_stock: 60, brand: 'PhotoMax', resolution: '24MP' },
//     { category: 'electronics',id:10, name: 'Smartwatch', image: 'https://i.im.ge/2025/03/12/pdtC0F.fdfe814947bdf4b3750147224e17fe98.jpeg', price: 299, no_of_stock: 70, brand: 'WearTech', features: ['Heart rate monitor', 'GPS'] },
//     // Health Products
//     { category: 'health product',id:11, name: 'Vitamin C 1000mg', image: 'https://i.im.ge/2025/03/12/pdPJZ6.health-product1-1.webp', price: 19.99, no_of_stock: 200, brand: 'VitaPlus', quantity: '100 tablets' },
//     { category: 'health product',id:12, name: 'Protein Powder', image: 'https://i.im.ge/2025/03/12/pdPvmz.health-product1-2.webp', price: 39.99, no_of_stock: 80, brand: 'MuscleMax', weight: '2 lbs' },
//     { category: 'health product',id:13, name: 'Fitness Tracker', image: 'https://i.im.ge/2025/03/12/pdPzHy.istockphoto-1017680574-612x612.jpeg', price: 79.99, no_of_stock: 90, brand: 'FitLife', features: ['Step counter', 'Sleep monitor'] },
//     { category: 'health product',id:14, name: 'Essential Oils Set', image: 'https://i.im.ge/2025/03/12/pdPGb9.istockphoto-1311515424-612x612.jpeg', price: 24.99, no_of_stock: 150, brand: 'AromaTherapy', quantity: '6 bottles' },
//     { category: 'health product',id:15, name: 'Digital Thermometer', image: 'https://i.im.ge/2025/03/12/pdtTAh.Supplement-Catagory-Bee-Produts.jpeg', price: 14.99, no_of_stock: 120, brand: 'HealthCheck', type: 'Infrared' },
//     // Automobile
//     { category: 'auto mobile',id:16, name: 'Car Wash Kit', image: 'https://i.im.ge/2025/03/12/pdPSty.8da327dd4aaa783ef9c724530aa1957b.jpeg', price: 29.99, no_of_stock: 75, brand: 'AutoShine', items: ['Soap', 'Sponge', 'Cloth'] },
//     { category: 'auto mobile',id:17, name: 'Tire Pressure Gauge', image: 'https://i.im.ge/2025/03/12/pdP2qJ.760e65d1bfe1f7c98a58dc6e374dab65.jpeg', price: 9.99, no_of_stock: 200, brand: 'DriveSafe', type: 'Digital' },
//     { category: 'auto mobile',id:18, name: 'Car Battery Charger', image: 'https://i.im.ge/2025/03/12/pdPO4a.6966eb04114cc967b50877d872f154fa.jpeg', price: 69.99, no_of_stock: 40, brand: 'PowerDrive', voltage: '12V' },
//     { category: 'auto mobile',id:19, name: 'Dash Cam', image: 'https://i.im.ge/2025/03/12/pdPdzS.compact-white-executive-car-with-beautiful-wheels-large-chrome-grille-263957-464.jpeg', price: 89.99, no_of_stock: 60, brand: 'RoadView', resolution: '1080p' },
//     { category: 'auto mobile',id:20, name: 'Car Seat Covers', image: 'https://i.im.ge/2025/03/12/pdPF3x.mercedes-red-sports-car-316708-2436.jpeg', price: 49.99, no_of_stock: 90, brand: 'ComfortRide', material: 'Leather' },
//     // Fashion
//     { category: 'fashion',id:21, name: 'Men\'s T-Shirt', image: 'https://i.im.ge/2025/03/12/pdP5yM.fashionable-clothes-rack-interior-bright-room-441923-10902.jpeg', price: 19.99, no_of_stock: 150, brand: 'StyleCo', size: ['S', 'M', 'L'], color: ['Black', 'White', 'Gray'] },
//     { category: 'fashion',id:22, name: 'Women\'s Dress', image: 'https://i.im.ge/2025/03/12/pdPh48.fast-fashion-vs-slow-sustainable-fashion-23-2149134026.jpeg', price: 49.99, no_of_stock: 80, brand: 'ElegantWear', size: ['XS', 'S', 'M'], color: ['Red', 'Blue'] },
//     { category: 'fashion',id:23, name: 'Jeans', image: 'https://i.im.ge/2025/03/12/pdPLU9.isometric-cloth-3d-isolated-render-28315-9363.jpeg', price: 39.99, no_of_stock: 100, brand: 'DenimStyle', size: ['30', '32', '34'], color: ['Blue', 'Black'] },
//     { category: 'fashion',id:24, name: 'Sunglasses', image: 'https://i.im.ge/2025/03/12/pdP0sh.png-baby-blue-cropped-top-mockup-53876-1044822.jpeg', price: 24.99, no_of_stock: 120, brand: 'VisionStyle', color: ['Black', 'Brown'] },
//     { category: 'fashion',id:25, name: 'Scarf', image: 'https://i.im.ge/2025/03/12/pdPUYX.still-life-rendering-jackets-display-23-2149745029.jpeg', price: 14.99, no_of_stock: 200, brand: 'WarmWear', material: 'Wool' },
//     // Shoes
//     { category: 'shoes',id:26, name: 'Running Shoes', image: 'https://i.im.ge/2025/03/12/pdtiic.brown-highheeled-shoes-with-laces-isolate-white-background-273893-230-1.jpeg', price: 79.99, no_of_stock: 90, brand: 'RunFast', size: ['8', '9', '10'], color: ['Blue', 'Gray'] },
//     { category: 'shoes',id:27, name: 'Casual Sneakers', image: 'https://i.im.ge/2025/03/12/pdt5GG.brown-leather-shoes-1203-8175.jpeg', price: 59.99, no_of_stock: 110, brand: 'StreetStyle', size: ['7', '8', '9'], color: ['White', 'Black'] },
//     { category: 'shoes',id:28, name: 'Dress Shoes', image: 'https://i.im.ge/2025/03/12/pdthlT.color-sport-sneaker-98292-3191.jpeg', price: 99.99, no_of_stock: 60, brand: 'FormalStep', size: ['9', '10', '11'], color: ['Black', 'Brown'] },
//     { category: 'shoes',id:29, name: 'Boots', image: 'https://i.im.ge/2025/03/12/pdtLK0.hologram-shoes-sports-fitness-run-260nw-2240460409.jpeg', price: 89.99, no_of_stock: 70, brand: 'AdventureFoot', size: ['8', '9', '10'], color: ['Brown', 'Tan'] },
//     { category: 'shoes',id:30, name: 'Sandals', image: 'https://i.im.ge/2025/03/12/pdtN2y.stylish-modern-sneaker-design-white-gray-black-red-teal-accents-thick-sole-casual-footwear-trendy-shoe-632498-30181.jpeg', price: 39.99, no_of_stock: 150, brand: 'SummerWalk', size: ['7', '8', '9'], color: ['Brown', 'Beige'] },
//     // Books
//     { category: 'books', id:31, name: 'Fiction Novel', image: 'https://i.im.ge/2025/03/12/pdNJLP.3adcff7a670cde2ea2bb8ceadb6cceac.jpeg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction' },
//     { category: 'books', id:32, name: 'Science Book',  image: 'https://i.im.ge/2025/03/12/pdNn31.6f61ac7c76689b78600009492b820d91-0000000.jpeg', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science' },
//     { category: 'books', id:33, name: 'Cookbook',      image: 'https://i.im.ge/2025/03/12/pdNvQp.58250fc8c554b126d9a568604f7b0219.jpeg', price: 24.99, no_of_stock: 60, author: 'Chef C', genre: 'Cookbook' },
//     { category: 'books', id:34, name: 'Fiction Novel', image: 'https://i.im.ge/2025/03/12/pdNHRq.ab84627f9b523e761fcfbcbed05c69eb.jpeg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction' },
//     { category: 'books', id:35, name: 'Science Book',  image: 'https://i.im.ge/2025/03/12/pdPuLG.482ed7ce2ee4207b59f2de08aa6b6019-0000000.jpeg', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science' },
//     { category: 'featured',id:37, name: 'Fiction Novel', image: 'https://i.im.ge/2025/03/12/pdNvQp.58250fc8c554b126d9a568604f7b0219.jpeg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction' },
//     { category: 'featured',id:38, name: 'Science Book', image: 'https://i.im.ge/2025/03/12/pdPSty.8da327dd4aaa783ef9c724530aa1957b.jpeg', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science' },
//     { category: 'featured',id:39, name: 'Cookbook', image: 'https://i.im.ge/2025/03/12/pdtN2y.stylish-modern-sneaker-design-white-gray-black-red-teal-accents-thick-sole-casual-footwear-trendy-shoe-632498-30181.jpeg', price: 24.99, no_of_stock: 60, author: 'Chef C', genre: 'Cookbook' },
//     { category: 'featured',id:40, name: 'Fiction Novel', image: 'https://i.im.ge/2025/03/12/pdtSGP.black-modern-smartphone-143092-313.jpeg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction' },
//     { category: 'featured',id:41, name: 'Science Book', image: 'https://i.im.ge/2025/03/12/pdtcvh.s-l500-removebg-preview.png', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science' },
//     { category: 'featured',id:42, name: 'Cookbook', image: 'https://i.im.ge/2025/03/12/pdPyYP.still-life-rendering-jackets-display-23-2149745045.jpeg', price: 24.99, no_of_stock: 60, author: 'Chef C', genre: 'Cookbook' }
// ]

export const products = [
    // Phones
    { category: 'phones', id: 1, name: 'Smartphone X1', image: 'https://i.im.ge/2025/03/12/pdtOXC.26be56634ad9773c9d8f6315cac2cba7.jpeg', price: 799, no_of_stock: 50, brand: 'TechCo', screen_size: '6.5 inch', rating: 4.5 },
    { category: 'phones', id: 2, name: 'Budget Phone A2', image: 'https://i.im.ge/2025/03/12/pdt1iq.b8fcc5765adc68978faa5900116eea27.jpeg', price: 249, no_of_stock: 120, brand: 'ValueTech', screen_size: '6.0 inch', rating: 3.8 },
    { category: 'phones', id: 3, name: 'Premium Phone Z3', image: 'https://i.im.ge/2025/03/12/pdtSGP.black-modern-smartphone-143092-313.jpeg', price: 1299, no_of_stock: 25, brand: 'EliteMobile', screen_size: '6.8 inch', rating: 4.7 },
    { category: 'phones', id: 4, name: 'Rugged Phone R4', image: 'https://i.im.ge/2025/03/12/pdtq71.moscow-russia-august-30-2021-samsung-officially-launches-latest-flagship-smartphone-samsung-galaxy-flip-3-with-foldable-display-221513-4927.jpeg', price: 499, no_of_stock: 80, brand: 'ToughTech', screen_size: '6.2 inch', rating: 4.2 },
    { category: 'phones', id: 5, name: 'Foldable Phone F5', image: 'https://i.im.ge/2025/03/12/pdtapm.smartphone-vector-illustration-technology-advertising-element-easy-place-demo-screen-66219-1838.jpeg', price: 1599, no_of_stock: 15, brand: 'FlexiMobile', screen_size: '7.0 inch', rating: 4.6 },
    // Electronics
    { category: 'electronics', id: 6, name: '4K Smart TV', image: 'https://i.im.ge/2025/03/12/pdtbC8.76f93b5e7932b2f6342ce0aa79a614a6.jpeg', price: 899, no_of_stock: 30, brand: 'VisionTech', screen_size: '55 inch', type: 'LED', rating: 4.4 },
    { category: 'electronics', id: 7, name: 'Wireless Headphones', image: 'https://i.im.ge/2025/03/12/pdtxe9.3088d3d597da816fe9862cd40cbaf1ce.jpeg', price: 149, no_of_stock: 100, brand: 'AudioPro', type: 'Over-ear', rating: 4.1 },
    { category: 'electronics', id: 8, name: 'Laptop Pro 15', image: 'https://i.im.ge/2025/03/12/pdtYDX.112740860f91b8b3b57f5a9de70a5b51.jpeg', price: 1199, no_of_stock: 40, brand: 'CompTech', cpu: 'Intel i7', rating: 4.6 },
    { category: 'electronics', id: 9, name: 'Digital Camera', image: 'https://i.im.ge/2025/03/12/pdtEcK.d5cd8d8d47b39cf28ea80cfc29418ffd-1.jpeg', price: 599, no_of_stock: 60, brand: 'PhotoMax', resolution: '24MP', rating: 4.3 },
    { category: 'electronics', id: 10, name: 'Smartwatch', image: 'https://i.im.ge/2025/03/12/pdtC0F.fdfe814947bdf4b3750147224e17fe98.jpeg', price: 299, no_of_stock: 70, brand: 'WearTech', features: ['Heart rate monitor', 'GPS'], rating: 4.0 },
    // Health Products
    { category: 'health product', id: 11, name: 'Vitamin C 1000mg', image: 'https://i.im.ge/2025/03/12/pdPJZ6.health-product1-1.webp', price: 19.99, no_of_stock: 200, brand: 'VitaPlus', quantity: '100 tablets', rating: 4.7 },
    { category: 'health product', id: 12, name: 'Protein Powder', image: 'https://i.im.ge/2025/03/12/pdPvmz.health-product1-2.webp', price: 39.99, no_of_stock: 80, brand: 'MuscleMax', weight: '2 lbs', rating: 4.5 },
    { category: 'health product', id: 13, name: 'Fitness Tracker', image: 'https://i.im.ge/2025/03/12/pdPzHy.istockphoto-1017680574-612x612.jpeg', price: 79.99, no_of_stock: 90, brand: 'FitLife', features: ['Step counter', 'Sleep monitor'], rating: 4.2 },
    { category: 'health product', id: 14, name: 'Essential Oils Set', image: 'https://i.im.ge/2025/03/12/pdPGb9.istockphoto-1311515424-612x612.jpeg', price: 24.99, no_of_stock: 150, brand: 'AromaTherapy', quantity: '6 bottles', rating: 4.3 },
    { category: 'health product', id: 15, name: 'Digital Thermometer', image: 'https://i.im.ge/2025/03/12/pdtTAh.Supplement-Catagory-Bee-Produts.jpeg', price: 14.99, no_of_stock: 120, brand: 'HealthCheck', type: 'Infrared', rating: 4.6 },
    // Automobile
    { category: 'auto mobile', id: 16, name: 'Car Wash Kit', image: 'https://i.im.ge/2025/03/12/pdPSty.8da327dd4aaa783ef9c724530aa1957b.jpeg', price: 29.99, no_of_stock: 75, brand: 'AutoShine', items: ['Soap', 'Sponge', 'Cloth'], rating: 4.0 },
    { category: 'auto mobile', id: 17, name: 'Tire Pressure Gauge', image: 'https://i.im.ge/2025/03/12/pdP2qJ.760e65d1bfe1f7c98a58dc6e374dab65.jpeg', price: 9.99, no_of_stock: 200, brand: 'DriveSafe', type: 'Digital', rating: 4.1 },
    { category: 'auto mobile', id: 18, name: 'Car Battery Charger', image: 'https://i.im.ge/2025/03/12/pdPO4a.6966eb04114cc967b50877d872f154fa.jpeg', price: 69.99, no_of_stock: 40, brand: 'PowerDrive', voltage: '12V', rating: 4.4 },
    { category: 'auto mobile', id: 19, name: 'Dash Cam', image: 'https://i.im.ge/2025/03/12/pdPdzS.compact-white-executive-car-with-beautiful-wheels-large-chrome-grille-263957-464.jpeg', price: 89.99, no_of_stock: 60, brand: 'RoadView', resolution: '1080p', rating: 4.3 },
    { category: 'auto mobile', id: 20, name: 'Car Seat Covers', image: 'https://i.im.ge/2025/03/12/pdPF3x.mercedes-red-sports-car-316708-2436.jpeg', price: 49.99, no_of_stock: 90, brand: 'ComfortRide', material: 'Leather', rating: 4.2 },
    // Fashion
    { category: 'fashion', id: 21, name: 'Men\'s T-Shirt', image: 'https://i.im.ge/2025/03/12/pdP5yM.fashionable-clothes-rack-interior-bright-room-441923-10902.jpeg', price: 19.99, no_of_stock: 150, brand: 'StyleCo', size: ['S', 'M', 'L'], color: ['Black', 'White', 'Gray'], rating: 4.5 },
    { category: 'fashion', id: 22, name: 'Women\'s Dress', image: 'https://i.im.ge/2025/03/12/pdPh48.fast-fashion-vs-slow-sustainable-fashion-23-2149134026.jpeg', price: 49.99, no_of_stock: 80, brand: 'ElegantWear', size: ['XS', 'S', 'M'], color: ['Red', 'Blue'], rating: 4.3 },
    { category: 'fashion', id: 23, name: 'Jeans', image: 'https://i.im.ge/2025/03/12/pdPLU9.isometric-cloth-3d-isolated-render-28315-9363.jpeg', price: 39.99, no_of_stock: 100, brand: 'DenimStyle', size: ['30', '32', '34'], color: ['Blue', 'Black'], rating: 4.4 },
    { category: 'fashion', id: 24, name: 'Sunglasses', image: 'https://i.im.ge/2025/03/12/pdP0sh.png-baby-blue-cropped-top-mockup-53876-1044822.jpeg', price: 24.99, no_of_stock: 120, brand: 'VisionStyle', color: ['Black', 'Brown'], rating: 4.2 },
    { category: 'fashion', id: 25, name: 'Scarf', image: 'https://i.im.ge/2025/03/12/pdPUYX.still-life-rendering-jackets-display-23-2149745029.jpeg', price: 14.99, no_of_stock: 200, brand: 'WarmWear', material: 'Wool', rating: 4.1 },
    // Shoes
    { category: 'shoes', id: 26, name: 'Running Shoes', image: 'https://i.im.ge/2025/03/12/pdtiic.brown-highheeled-shoes-with-laces-isolate-white-background-273893-230-1.jpeg', price: 79.99, no_of_stock: 90, brand: 'RunFast', size: ['8', '9', '10'], color: ['Blue', 'Gray'], rating: 4.6 },
    { category: 'shoes', id: 27, name: 'Casual Sneakers', image: 'https://i.im.ge/2025/03/12/pdt5GG.brown-leather-shoes-1203-8175.jpeg', price: 59.99, no_of_stock: 110, brand: 'StreetStyle', size: ['7', '8', '9'], color: ['White', 'Black'], rating: 4.3 },
    { category: 'shoes', id: 28, name: 'Dress Shoes', image: 'https://i.im.ge/2025/03/12/pdthlT.color-sport-sneaker-98292-3191.jpeg', price: 99.99, no_of_stock: 60, brand: 'FormalStep', size: ['9', '10', '11'], color: ['Black', 'Brown'], rating: 4.5 },
    { category: 'shoes', id: 29, name: 'Boots', image: 'https://i.im.ge/2025/03/12/pdtLK0.hologram-shoes-sports-fitness-run-260nw-2240460409.jpeg', price: 89.99, no_of_stock: 70, brand: 'AdventureFoot', size: ['8', '9', '10'], color: ['Brown', 'Tan'], rating: 4.4 },
    { category: 'shoes', id: 30, name: 'Sandals', image: 'https://i.im.ge/2025/03/12/pdtN2y.stylish-modern-sneaker-design-white-gray-black-red-teal-accents-thick-sole-casual-footwear-trendy-shoe-632498-30181.jpeg', price: 39.99, no_of_stock: 150, brand: 'SummerWalk', size: ['7', '8', '9'], color: ['Brown', 'Beige'], rating: 4.2 },
    // Books
    { category: 'books', id: 31, name: 'Fiction Novel', image: 'https://i.im.ge/2025/03/12/pdNJLP.3adcff7a670cde2ea2bb8ceadb6cceac.jpeg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction', rating: 4.5 },
    { category: 'books', id: 32, name: 'Science Book', image: 'https://i.im.ge/2025/03/12/pdNn31.6f61ac7c76689b78600009492b820d91-0000000.jpeg', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science', rating: 4.3 },
    { category: 'books', id: 33, name: 'Cookbook', image: 'https://i.im.ge/2025/03/12/pdNvQp.58250fc8c554b126d9a568604f7b0219.jpeg', price: 24.99, no_of_stock: 60, author: 'Chef C', genre: 'Cookbook', rating: 4.6 },
    { category: 'books', id: 34, name: 'Fiction Novel', image: 'https://i.im.ge/2025/03/12/pdNHRq.ab84627f9b523e761fcfbcbed05c69eb.jpeg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction', rating: 4.4 },
    { category: 'books', id: 35, name: 'Science Book', image: 'https://i.im.ge/2025/03/12/pdPuLG.482ed7ce2ee4207b59f2de08aa6b6019-0000000.jpeg', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science', rating: 4.2 },
    // Featured
    { category: 'featured', id: 37, name: 'Fiction Novel', image: 'https://i.im.ge/2025/03/12/pdNvQp.58250fc8c554b126d9a568604f7b0219.jpeg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction', rating: 4.5 },
    { category: 'featured', id: 38, name: 'Science Book', image: 'https://i.im.ge/2025/03/12/pdPSty.8da327dd4aaa783ef9c724530aa1957b.jpeg', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science', rating: 4.3 },
    { category: 'featured', id: 39, name: 'Cookbook', image: 'https://i.im.ge/2025/03/12/pdtN2y.stylish-modern-sneaker-design-white-gray-black-red-teal-accents-thick-sole-casual-footwear-trendy-shoe-632498-30181.jpeg', price: 24.99, no_of_stock: 60, author: 'Chef C', genre: 'Cookbook', rating: 4.6 },
    { category: 'featured', id: 40, name: 'Fiction Novel', image: 'https://i.im.ge/2025/03/12/pdtSGP.black-modern-smartphone-143092-313.jpeg', price: 14.99, no_of_stock: 100, author: 'Author A', genre: 'Fiction', rating: 4.4 },
    { category: 'featured', id: 41, name: 'Science Book', image: 'https://i.im.ge/2025/03/12/pdtcvh.s-l500-removebg-preview.png', price: 19.99, no_of_stock: 80, author: 'Author B', genre: 'Science', rating: 4.2 },
    { category: 'featured', id: 42, name: 'Cookbook', image: 'https://i.im.ge/2025/03/12/pdPyYP.still-life-rendering-jackets-display-23-2149745045.jpeg', price: 24.99, no_of_stock: 60, author: 'Chef C', genre: 'Cook',rating:4.6}
]