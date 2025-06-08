const additionalProducts = [
  {
    name: 'MacBook Pro 16-inch M2 Chip',
    image:
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop',
    description:
      'The most powerful MacBook Pro ever is here. With the blazing-fast M2 Pro or M2 Max chip — the first of its kind designed for a pro laptop — you get groundbreaking performance and amazing battery life.',
    brand: 'Apple',
    category: 'Electronics',
    price: 2499.99,
    countInStock: 3,
    rating: 4.8,
    numReviews: 25,
  },
  {
    name: 'Samsung 65" 4K Smart TV',
    image:
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop',
    description:
      'Experience stunning 4K resolution with vibrant colors and deep contrast. Smart TV features include built-in streaming apps, voice control, and seamless connectivity.',
    brand: 'Samsung',
    category: 'Electronics',
    price: 899.99,
    countInStock: 8,
    rating: 4.3,
    numReviews: 18,
  },
  {
    name: 'Nike Air Max 270 Running Shoes',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    description:
      'The Nike Air Max 270 delivers visible Air cushioning from heel to toe for a comfortable stride. Engineered mesh upper provides breathability and modern style.',
    brand: 'Nike',
    category: 'Footwear',
    price: 149.99,
    countInStock: 15,
    rating: 4.6,
    numReviews: 42,
  },
  {
    name: 'Kindle Paperwhite E-reader',
    image: 'https://m.media-amazon.com/images/I/61pIU1YJVEL._AC_SL1000_.jpg',
    description:
      'The thinnest, lightest Kindle Paperwhite yet—with a flush-front design and 300 ppi glare-free display that reads like real paper even in bright sunlight.',
    brand: 'Amazon',
    category: 'Electronics',
    price: 139.99,
    countInStock: 12,
    rating: 4.4,
    numReviews: 67,
  },
  {
    name: 'Bose QuietComfort 45 Headphones',
    image:
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop',
    description:
      'World-class noise cancellation, comfortable fit, and premium audio quality. Up to 24 hours of battery life and quick charge feature for uninterrupted listening.',
    brand: 'Bose',
    category: 'Electronics',
    price: 329.99,
    countInStock: 6,
    rating: 4.7,
    numReviews: 33,
  },
  {
    name: 'Fitbit Versa 4 Fitness Smartwatch',
    image:
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&h=500&fit=crop',
    description:
      'Track your fitness goals with built-in GPS, heart rate monitoring, sleep tracking, and 40+ exercise modes. Stay connected with call, text, and app notifications.',
    brand: 'Fitbit',
    category: 'Electronics',
    price: 199.99,
    countInStock: 9,
    rating: 4.2,
    numReviews: 28,
  },
  {
    name: 'Stanley Adventure Quencher Tumbler 40oz',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    description:
      'Double-wall vacuum insulation keeps drinks cold for 11+ hours and hot for 7+ hours. Durable 18/8 stainless steel construction with comfort-grip handle.',
    brand: 'Stanley',
    category: 'Home & Kitchen',
    price: 44.99,
    countInStock: 22,
    rating: 4.5,
    numReviews: 156,
  },
  {
    name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop',
    description:
      '7 appliances in 1: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer. Cook meals up to 70% faster than traditional methods.',
    brand: 'Instant Pot',
    category: 'Home & Kitchen',
    price: 79.99,
    countInStock: 14,
    rating: 4.6,
    numReviews: 89,
  },
  {
    name: "Levi's 501 Original Fit Jeans",
    image:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
    description:
      'The original blue jean since 1873. Straight fit through the seat and thigh with a regular taper from knee to ankle. Made with premium denim for lasting comfort.',
    brand: "Levi's",
    category: 'Clothing',
    price: 59.99,
    countInStock: 18,
    rating: 4.3,
    numReviews: 74,
  },
  {
    name: 'Dyson V15 Detect Cordless Vacuum',
    image: 'https://m.media-amazon.com/images/I/81O4+6IH+GL._AC_SL1500_.jpg',
    description:
      'Laser dust detection reveals microscopic particles. Powerful suction with intelligent cleaning modes. Up to 60 minutes of fade-free power with LCD screen showing real-time performance.',
    brand: 'Dyson',
    category: 'Home & Garden',
    price: 749.99,
    countInStock: 4,
    rating: 4.8,
    numReviews: 37,
  },
  {
    name: 'Sony WH-1000XM4 Noise Canceling Headphones',
    image:
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Up to 30-hour battery life with quick charge.',
    brand: 'Sony',
    category: 'Electronics',
    price: 348.0,
    countInStock: 8,
    rating: 4.7,
    numReviews: 45,
  },
  {
    name: 'iPad Air 10.9-inch Wi-Fi 256GB',
    image:
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Powerful A14 Bionic chip with Neural Engine. 10.9-inch Liquid Retina display with True Tone and P3 wide color. Compatible with Apple Pencil and Magic Keyboard.',
    brand: 'Apple',
    category: 'Electronics',
    price: 749.0,
    countInStock: 5,
    rating: 4.6,
    numReviews: 38,
  },
  {
    name: 'Samsung Galaxy Watch 6 Classic',
    image:
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Advanced health monitoring with body composition analysis. Classic rotating bezel design with premium materials. 5ATM water resistance and comprehensive fitness tracking.',
    brand: 'Samsung',
    category: 'Electronics',
    price: 429.99,
    countInStock: 12,
    rating: 4.4,
    numReviews: 22,
  },
  {
    name: 'Dell XPS 13 Laptop Intel Core i7',
    image:
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      '13.4-inch InfinityEdge display with anti-reflective coating. 11th Gen Intel Core i7 processor with 16GB RAM and 512GB SSD. Ultra-portable design with premium build quality.',
    brand: 'Dell',
    category: 'Electronics',
    price: 1299.99,
    countInStock: 6,
    rating: 4.5,
    numReviews: 31,
  },
  {
    name: 'Nintendo Switch OLED Console',
    image: 'https://m.media-amazon.com/images/I/51UiUA8ti8L._AC_SL1000_.jpg',
    description:
      '7-inch OLED screen with vivid colors and crisp contrast. Enhanced audio for handheld and tabletop play. 64GB internal storage and improved kickstand design.',
    brand: 'Nintendo',
    category: 'Electronics',
    price: 349.99,
    countInStock: 15,
    rating: 4.8,
    numReviews: 67,
  },
  {
    name: 'Apple AirPods Pro 2nd Generation',
    image:
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Active Noise Cancellation with Adaptive Transparency. Spatial Audio with dynamic head tracking. Up to 6 hours of listening time with ANC enabled.',
    brand: 'Apple',
    category: 'Electronics',
    price: 249.0,
    countInStock: 18,
    rating: 4.7,
    numReviews: 89,
  },
  {
    name: 'Microsoft Surface Pro 9',
    image:
      'https://images.pexels.com/photos/8349272/pexels-photo-8349272.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      '13-inch touchscreen 2-in-1 laptop with 12th Gen Intel Core processor. All-day battery life and laptop-class performance in an ultra-portable design.',
    brand: 'Microsoft',
    category: 'Electronics',
    price: 999.99,
    countInStock: 7,
    rating: 4.4,
    numReviews: 26,
  },
  {
    name: 'Google Pixel 8 Pro Smartphone',
    image:
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      '6.7-inch Super Actua display with advanced camera system powered by Google AI. Titan M security chip and 7 years of OS updates included.',
    brand: 'Google',
    category: 'Electronics',
    price: 899.0,
    countInStock: 11,
    rating: 4.5,
    numReviews: 43,
  },
  {
    name: 'JBL Charge 5 Portable Bluetooth Speaker',
    image:
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Powerful JBL Pro Sound with bold bass. IP67 waterproof and dustproof rating. 20 hours of playtime with built-in powerbank functionality.',
    brand: 'JBL',
    category: 'Electronics',
    price: 179.95,
    countInStock: 14,
    rating: 4.6,
    numReviews: 78,
  },
  {
    name: 'Anker PowerCore 10000 Portable Charger',
    image:
      'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Ultra-compact 10000mAh portable charger with PowerIQ technology. High-speed charging for iPhone, Samsung Galaxy, and more devices.',
    brand: 'Anker',
    category: 'Electronics',
    price: 29.99,
    countInStock: 25,
    rating: 4.5,
    numReviews: 156,
  },
  {
    name: 'Razer DeathAdder V3 Gaming Mouse',
    image:
      'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Ergonomic esports gaming mouse with Focus Pro 30K sensor. 90-hour battery life and Razer HyperSpeed wireless technology for ultra-low latency.',
    brand: 'Razer',
    category: 'Electronics',
    price: 99.99,
    countInStock: 16,
    rating: 4.7,
    numReviews: 34,
  },
  {
    name: 'LG 27" 4K UltraHD Monitor',
    image:
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      '27-inch 4K UHD display with IPS technology for accurate colors. USB-C connectivity with 60W power delivery and HDR10 support.',
    brand: 'LG',
    category: 'Electronics',
    price: 299.99,
    countInStock: 9,
    rating: 4.3,
    numReviews: 47,
  },
  {
    name: 'Corsair K70 RGB Mechanical Keyboard',
    image:
      'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Full-size mechanical gaming keyboard with Cherry MX switches. Per-key RGB backlighting and aircraft-grade aluminum frame for durability.',
    brand: 'Corsair',
    category: 'Electronics',
    price: 169.99,
    countInStock: 12,
    rating: 4.6,
    numReviews: 91,
  },
  {
    name: 'GoPro HERO12 Black Action Camera',
    image:
      'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Revolutionary new image sensor captures 5.3K video and 27MP photos. HyperSmooth 6.0 stabilization and waterproof to 33ft without housing.',
    brand: 'GoPro',
    category: 'Electronics',
    price: 399.99,
    countInStock: 8,
    rating: 4.8,
    numReviews: 62,
  },
  {
    name: 'Oculus Quest 3 VR Headset',
    image:
      'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Mixed reality VR headset with 4K+ Infinite Display and Snapdragon XR2 Gen 2 processor. Hand tracking and room-scale VR without external sensors.',
    brand: 'Meta',
    category: 'Electronics',
    price: 499.99,
    countInStock: 6,
    rating: 4.4,
    numReviews: 29,
  },

  {
    name: 'Tesla Model Y Phone Charger Wireless',
    image:
      'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Qi-certified wireless charging pad with fast 15W charging capability. Compatible with iPhone, Samsung Galaxy, and other Qi-enabled devices. LED indicator shows charging status.',
    brand: 'Tesla',
    category: 'Electronics',
    price: 89.99,
    countInStock: 19,
    rating: 4.4,
    numReviews: 52,
  },
  {
    name: 'SteelSeries Arctis 7P Gaming Headset',
    image:
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Lossless 2.4GHz wireless gaming headset designed for PlayStation 5. DTS Headphone:X 2.0 surround sound and ClearCast noise-cancelling microphone.',
    brand: 'SteelSeries',
    category: 'Electronics',
    price: 149.99,
    countInStock: 13,
    rating: 4.6,
    numReviews: 68,
  },
  {
    name: 'ASUS ROG Strix GeForce RTX 4070 Graphics Card',
    image:
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'High-performance graphics card with 12GB GDDR6X memory. Ray tracing and DLSS 3 support for 4K gaming. Advanced cooling with Axial-tech fans.',
    brand: 'ASUS',
    category: 'Electronics',
    price: 599.99,
    countInStock: 4,
    rating: 4.8,
    numReviews: 23,
  },
  {
    name: 'Rode PodMic USB Microphone',
    image:
      'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Professional broadcast-quality USB microphone perfect for podcasting, streaming, and voiceovers. Built-in pop shield and zero-latency headphone monitoring.',
    brand: 'Rode',
    category: 'Electronics',
    price: 199.0,
    countInStock: 8,
    rating: 4.7,
    numReviews: 45,
  },
  {
    name: 'Garmin Forerunner 965 GPS Smartwatch',
    image:
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Premium GPS running smartwatch with AMOLED display and training readiness score. Multi-band GPS and up to 23 days battery life in smartwatch mode.',
    brand: 'Garmin',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.5,
    numReviews: 34,
  },
  {
    name: 'Elgato Stream Deck MK.2',
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      '15 customizable LCD keys for live content creation. One-touch operation for switching scenes, launching media, adjusting audio and more. Perfect for streamers.',
    brand: 'Elgato',
    category: 'Electronics',
    price: 149.99,
    countInStock: 11,
    rating: 4.6,
    numReviews: 87,
  },
  {
    name: 'Western Digital 2TB Portable SSD',
    image:
      'https://m.media-amazon.com/images/I/71+lImODxmL._AC_UY436_FMwebp_QL65_.jpg',
    description:
      'Ultra-fast portable SSD with up to 1050MB/s read speeds. USB-C and USB-A compatible with password protection and 256-bit AES hardware encryption.',
    brand: 'Western Digital',
    category: 'Electronics',
    price: 179.99,
    countInStock: 16,
    rating: 4.5,
    numReviews: 73,
  },
  {
    name: 'Wacom Intuos Pro Digital Drawing Tablet',
    image:
      'https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Professional pen tablet with 8192 levels of pressure sensitivity. Multi-touch surface and customizable ExpressKeys for enhanced workflow efficiency.',
    brand: 'Wacom',
    category: 'Electronics',
    price: 379.95,
    countInStock: 9,
    rating: 4.7,
    numReviews: 56,
  },
  {
    name: 'Blue Yeti Nano USB Microphone',
    image:
      'https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Compact USB condenser microphone with studio-quality sound. Plug-and-play setup with real-time LED meter and no-latency headphone monitoring.',
    brand: 'Blue',
    category: 'Electronics',
    price: 99.99,
    countInStock: 21,
    rating: 4.4,
    numReviews: 94,
  },
  {
    name: 'Sonos Era 100 Smart Speaker',
    image:
      'https://images.pexels.com/photos/6686442/pexels-photo-6686442.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    description:
      'Next-gen smart speaker with spatial audio and Trueplay tuning. Voice control with Amazon Alexa and works with Spotify, Apple Music, and other services.',
    brand: 'Sonos',
    category: 'Electronics',
    price: 249.0,
    countInStock: 12,
    rating: 4.6,
    numReviews: 48,
  },

  {
    name: 'Sonos Arc Soundbar',
    image: 'https://m.media-amazon.com/images/I/61CG3qaHtFL._AC_SX679_.jpg',
    description:
      'Premium smart soundbar with Dolby Atmos support. Eleven high-performance drivers and advanced processing create immersive surround sound.',
    brand: 'Sonos',
    category: 'Electronics',
    price: 899.0,
    countInStock: 11,
    rating: 4.6,
    numReviews: 78,
  },
  {
    name: 'Razer Blade 15 Gaming Laptop',
    image:
      'https://m.media-amazon.com/images/I/61XL5oLCupL.__AC_SY300_SX300_QL70_ML2_.jpg',
    description:
      'High-performance gaming laptop with Intel i7-13800H and RTX 4070. 15.6-inch QHD 240Hz display with vapor chamber cooling system.',
    brand: 'Razer',
    category: 'Electronics',
    price: 2499.99,
    countInStock: 5,
    rating: 4.7,
    numReviews: 56,
  },
  {
    name: 'Herman Miller Embody Gaming Chair',
    image: 'https://m.media-amazon.com/images/I/810lzrMfO9L._AC_SX679_.jpg',
    description:
      'Ergonomic gaming chair designed for extended play sessions. PostureFit spinal support and cooling foam for optimal comfort and health.',
    brand: 'Herman Miller',
    category: 'Furniture',
    price: 1695.0,
    countInStock: 7,
    rating: 4.8,
    numReviews: 134,
  },
  {
    name: 'LG C3 65" OLED Smart TV',
    image:
      'https://m.media-amazon.com/images/I/81heQjYEEUL.__AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      '65-inch 4K OLED TV with self-lit pixels for perfect blacks. α9 Gen6 AI Processor with Dolby Vision IQ and webOS smart platform.',
    brand: 'LG',
    category: 'Electronics',
    price: 1799.99,
    countInStock: 6,
    rating: 4.8,
    numReviews: 89,
  },
  {
    name: 'Rode PodMic Dynamic Microphone',
    image:
      'https://m.media-amazon.com/images/I/51Qshd1JNaL.__AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Broadcast-quality dynamic microphone optimized for podcasting. Internal pop shield and rich, balanced sound with minimal handling noise.',
    brand: 'Rode',
    category: 'Electronics',
    price: 199.0,
    countInStock: 16,
    rating: 4.7,
    numReviews: 167,
  },
  {
    name: 'Secretlab TITAN Evo Gaming Chair',
    image:
      'https://m.media-amazon.com/images/I/612GtaYzJOL.__AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Award-winning gaming chair with NEO Hybrid Leatherette and 4-way lumbar support. Cold-cure foam and magnetic memory foam head pillow.',
    brand: 'Secretlab',
    category: 'Furniture',
    price: 549.0,
    countInStock: 12,
    rating: 4.6,
    numReviews: 298,
  },
  {
    name: 'Shure SM7B Dynamic Microphone',
    image: 'https://m.media-amazon.com/images/I/71kDYITwQ9L._AC_SX679_.jpg',
    description:
      'Professional broadcast microphone with wide-range frequency response. Internal air suspension shock isolation and electromagnetic shielding.',
    brand: 'Shure',
    category: 'Electronics',
    price: 399.0,
    countInStock: 8,
    rating: 4.9,
    numReviews: 234,
  },
  {
    name: 'IKEA BEKANT Standing Desk',
    image: 'https://m.media-amazon.com/images/I/61VKrH6MNuL._AC_SX679_.jpg',
    description:
      'Height-adjustable desk with electric motor operation. Spacious work surface with cable management and memory settings for preferred heights.',
    brand: 'IKEA',
    category: 'Furniture',
    price: 249.0,
    countInStock: 19,
    rating: 4.3,
    numReviews: 156,
  },
  {
    name: 'CalDigit TS4 Thunderbolt 4 Dock',
    image:
      'https://m.media-amazon.com/images/I/71fNZUQs-0L.__AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Ultimate Thunderbolt 4 dock with 18 ports including dual 8K display support. 98W charging and universal compatibility with Mac and PC.',
    brand: 'CalDigit',
    category: 'Electronics',
    price: 379.99,
    countInStock: 9,
    rating: 4.7,
    numReviews: 93,
  },
]

export default additionalProducts
