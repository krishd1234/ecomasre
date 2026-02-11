// deka clouthess - Products & Data
// Currency: Indian Rupee (₹), Prices: ₹200 - ₹1000

const CURRENCY = '₹';
const FREE_SHIPPING_MIN = 1000;
const SHIPPING_COST = 99;

const PRODUCTS = [
  { id: 1, name: "Essential Oversized Tee", category: "men", price: 449, originalPrice: 549, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop", badge: "Best Seller", rating: 5 },
  { id: 2, name: "Minimalist Crop Top", category: "women", price: 399, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop", badge: "New", rating: 5 },
  { id: 3, name: "Classic White Shirt", category: "men", price: 649, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop", rating: 4 },
  { id: 4, name: "High-Waist Trousers", category: "women", price: 899, originalPrice: 999, image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&h=800&fit=crop", badge: "Sale", rating: 5 },
  { id: 5, name: "Relaxed Hoodie", category: "men", price: 749, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", badge: "New", rating: 5 },
  { id: 6, name: "Flow Silk Blouse", category: "women", price: 949, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop", rating: 4 },
  { id: 7, name: "Tailored Blazer", category: "men", price: 999, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop", badge: "Best Seller", rating: 5 },
  { id: 8, name: "Wide-Leg Jumpsuit", category: "women", price: 899, image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&h=800&fit=crop", badge: "New", rating: 5 },
  { id: 9, name: "Striped Polo", category: "men", price: 549, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=800&fit=crop", rating: 4 },
  { id: 10, name: "Leather Midi Skirt", category: "women", price: 999, image: "https://images.unsplash.com/photo-1583496661160-fb5886a08b2f?w=600&h=800&fit=crop", rating: 5 },
  { id: 11, name: "Cotton Chinos", category: "men", price: 699, originalPrice: 849, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop", badge: "Sale", rating: 4 },
  { id: 12, name: "Cashmere Sweater", category: "women", price: 999, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop", badge: "Best Seller", rating: 5 }
];

const COLLECTIONS = [
  { name: "Men", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&h=1000&fit=crop", link: "shop.html?category=men", count: "24 items" },
  { name: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop", link: "shop.html?category=women", count: "28 items" },
  { name: "New Arrivals", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1000&fit=crop", link: "shop.html?category=new", count: "12 items" },
  { name: "Best Sellers", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop", link: "shop.html?category=best", count: "15 items" }
];

const REVIEWS = [
  { text: "Absolutely love my purchase! The quality is exceptional and the fit is perfect. deka clouthess has become my go-to for timeless pieces.", author: "Sarah M.", rating: 5 },
  { text: "Fast shipping and beautiful packaging. The minimalist aesthetic is exactly what I was looking for. Will definitely order again!", author: "James L.", rating: 5 },
  { text: "Clean lines, premium fabrics, and versatile pieces. Worth every penny. The customer service was also amazing.", author: "Emma R.", rating: 5 }
];

const SIZES = ["XS", "S", "M", "L", "XL"];
