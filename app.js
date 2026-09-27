/**
 * QuickBite - Food Delivery & 10-Minute Groceries SuperApp
 * Full Interactive Engine supporting Dedicated Food & Grocery Portals
 */

// ==========================================
// 1. COMPREHENSIVE PRODUCT CATALOG
// ==========================================
const PRODUCTS = [
  // --- DEDICATED RESTAURANT FOOD (Zomato/Swiggy Style) ---
  {
    id: "food-1",
    name: "Royal Hyderabadi Dum Biryani",
    category: "biryani",
    type: "food",
    restaurant: "Behrouz Royal Kitchen",
    isVeg: false,
    rating: 4.8,
    reviews: 1420,
    deliveryTime: "25-30 min",
    isExpress: false,
    basePrice: 349,
    originalPrice: 449,
    discount: "22% OFF",
    description: "Slow-cooked fragrant basmati rice with tender spiced meat cuts, royal saffron, caramelized onions & secret kewra aroma.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Single Portion (1 Person)", extraPrice: 0, default: true },
        { name: "Medium Pot (2 Persons)", extraPrice: 220 },
        { name: "Family Feast Pot (3-4 Persons)", extraPrice: 450 }
      ],
      spiceLevels: ["Mild Aromatic", "Authentic Medium", "Fiery Hyderabadi Spicy"],
      addons: [
        { name: "Extra Mirchi Ka Salan & Raita", price: 35 },
        { name: "Boiled Spiced Egg (2 pcs)", price: 40 },
        { name: "Gulab Jamun (2 pcs)", price: 60 }
      ]
    }
  },
  {
    id: "food-2",
    name: "Paneer Butter Masala & Garlic Naan",
    category: "north-indian",
    type: "food",
    restaurant: "Punjab Grill Express",
    isVeg: true,
    rating: 4.7,
    reviews: 980,
    deliveryTime: "20-25 min",
    isExpress: false,
    basePrice: 289,
    originalPrice: 349,
    discount: "17% OFF",
    description: "Charred fresh cottage cheese cubes simmered in a velvety rich tomato cashew gravy, paired with butter garlic naans.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Standard (2 Naan + Gravy)", extraPrice: 0, default: true },
        { name: "Deluxe (4 Naan + Dal Makhani + Gravy)", extraPrice: 150 }
      ],
      spiceLevels: ["Mild Creamy", "Classic North Indian", "Extra Spicy"],
      addons: [
        { name: "Extra Butter Garlic Naan (2 pcs)", price: 70 },
        { name: "Sirka Onions & Green Chutney", price: 20 },
        { name: "Sweet Lassi (300ml)", price: 60 }
      ]
    }
  },
  {
    id: "food-3",
    name: "Wood-Fired Farmhouse Pizza",
    category: "pizza",
    type: "food",
    restaurant: "La Pino's Gourmet Pizzeria",
    isVeg: true,
    rating: 4.6,
    reviews: 2100,
    deliveryTime: "25-35 min",
    isExpress: false,
    basePrice: 399,
    originalPrice: 499,
    discount: "20% OFF",
    description: "Crispy hand-stretched crust topped with herb marinara, melted mozzarella, bell peppers, golden corn, and black olives.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Regular 8-inch (4 Slices)", extraPrice: 0, default: true },
        { name: "Medium 10-inch (6 Slices)", extraPrice: 160 },
        { name: "Large 12-inch (8 Slices)", extraPrice: 290 }
      ],
      crustTypes: ["Hand Tossed Thin Crust", "Cheese Burst (+₹69)", "Wheat Thin Crust"],
      addons: [
        { name: "Extra Mozzarella Cheese Layer", price: 69 },
        { name: "Cheesy Garlic Breadsticks (4 pcs)", price: 119 },
        { name: "Chili Garlic Dip", price: 29 }
      ]
    }
  },
  {
    id: "food-4",
    name: "Crispy Peri-Peri Fried Chicken Burger",
    category: "burger",
    type: "food",
    restaurant: "Smash & Burger Club",
    isVeg: false,
    rating: 4.9,
    reviews: 3400,
    deliveryTime: "15-20 min",
    isExpress: true,
    basePrice: 229,
    originalPrice: 299,
    discount: "23% OFF",
    description: "Double-crunch golden chicken fillet dusted in African peri-peri spices, iceberg lettuce & smoked chipotle mayo in toasted brioche.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Single Burger", extraPrice: 0, default: true },
        { name: "Combo (With Peri-Peri Fries & Coke)", extraPrice: 110 }
      ],
      spiceLevels: ["Mild Mayo", "Zesty Peri-Peri", "Inferno Hot"],
      addons: [
        { name: "Extra Melted Cheddar Slice", price: 30 },
        { name: "Crispy Onion Rings (4 pcs)", price: 59 },
        { name: "Truffle Herb Mayo Dip", price: 25 }
      ]
    }
  },
  {
    id: "food-5",
    name: "Ghee Roast Masala Dosa",
    category: "south-indian",
    type: "food",
    restaurant: "Rameshwaram South Cafe",
    isVeg: true,
    rating: 4.9,
    reviews: 4120,
    deliveryTime: "20-25 min",
    isExpress: false,
    basePrice: 179,
    originalPrice: 220,
    discount: "18% OFF",
    description: "Crispy golden crepe roasted in pure desi ghee, filled with spiced potato masala, served with 3 chutneys & drumstick sambar.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Standard Ghee Roast", extraPrice: 0, default: true },
        { name: "Cheese Ghee Roast Dosa", extraPrice: 50 }
      ],
      addons: [
        { name: "Crispy Medu Vada (1 pc)", price: 35 },
        { name: "Extra Hot Drumstick Sambar (300ml)", price: 25 },
        { name: "Filter Coffee (Authentic Brass Decoction)", price: 45 }
      ]
    }
  },
  {
    id: "food-6",
    name: "Wok-Tossed Hakka Noodles & Manchurian",
    category: "chinese",
    type: "food",
    restaurant: "Dragon Bowl Express",
    isVeg: true,
    rating: 4.5,
    reviews: 820,
    deliveryTime: "25-30 min",
    isExpress: false,
    basePrice: 249,
    originalPrice: 310,
    discount: "20% OFF",
    description: "Classic street-style Indo-Chinese noodles tossed with crunchy peppers, spring onion, served with veg Manchurian balls in rich gravy.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Veg Manchurian Combo", extraPrice: 0, default: true },
        { name: "Chilli Chicken Combo", extraPrice: 70 }
      ],
      spiceLevels: ["Mild Savory", "Authentic Spicy Schezwan", "Extra Fiery"],
      addons: [
        { name: "Crispy Spring Rolls (4 pcs)", price: 79 },
        { name: "Hot & Sour Soup (250ml)", price: 55 }
      ]
    }
  },
  {
    id: "food-7",
    name: "Belgian Chocolate Lava Cake",
    category: "desserts",
    type: "food",
    restaurant: "The Dessert Company",
    isVeg: true,
    rating: 4.9,
    reviews: 5300,
    deliveryTime: "15-20 min",
    isExpress: true,
    basePrice: 149,
    originalPrice: 199,
    discount: "25% OFF",
    description: "Warm, decadent dark chocolate cake with a molten Belgian chocolate ganache center that oozes with every spoonful.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "1 Classic Lava Cake", extraPrice: 0, default: true },
        { name: "Twin Pack (2 Lava Cakes)", extraPrice: 120 }
      ],
      addons: [
        { name: "Vanilla Bean Ice Cream Scoop", price: 45 },
        { name: "Caramel Drizzle & Roasted Almonds", price: 30 }
      ]
    }
  },
  {
    id: "food-8",
    name: "Butter Chicken & Rumali Roti",
    category: "north-indian",
    type: "food",
    restaurant: "Moti Mahal Delux",
    isVeg: false,
    rating: 4.9,
    reviews: 3100,
    deliveryTime: "25-30 min",
    isExpress: false,
    basePrice: 389,
    originalPrice: 475,
    discount: "18% OFF",
    description: "The iconic tender tandoori chicken simmered in silky tomato butter makhani gravy with fenugreek leaves and cream.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Boneless Half (2 Persons)", extraPrice: 0, default: true },
        { name: "Boneless Full (3-4 Persons)", extraPrice: 220 }
      ],
      spiceLevels: ["Classic Mild Butter", "Medium Spicy", "Spicy Tandoori"],
      addons: [
        { name: "Soft Rumali Roti (2 pcs)", price: 40 },
        { name: "Jeera Rice Bowl", price: 90 }
      ]
    }
  },
  {
    id: "food-9",
    name: "Mumbai Pav Bhaji with Butter Pav",
    category: "street-food",
    type: "food",
    restaurant: "Chowpatty Street Bites",
    isVeg: true,
    rating: 4.8,
    reviews: 1850,
    deliveryTime: "20-25 min",
    isExpress: true,
    basePrice: 199,
    originalPrice: 249,
    discount: "20% OFF",
    description: "Mashed spiced vegetable bhaji simmered in dollops of Amul butter, garnished with fresh cilantro and lemon.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Standard (2 Butter Pav + Bhaji)", extraPrice: 0, default: true },
        { name: "Cheese Pav Bhaji Combo (4 Pav)", extraPrice: 80 }
      ],
      addons: [
        { name: "Extra Butter Toasted Pav (2 pcs)", price: 40 },
        { name: "Extra Amul Butter Block", price: 25 }
      ]
    }
  },

  // --- DEDICATED 10-MINUTE GROCERIES (Blinkit Style) ---
  {
    id: "groc-1",
    name: "Amul Taaza Homogenised Toned Milk",
    category: "dairy",
    type: "grocery",
    restaurant: "QuickBite Dark Store (Sector 28)",
    isVeg: true,
    rating: 4.9,
    reviews: 12800,
    deliveryTime: "10-12 min",
    isExpress: true,
    basePrice: 34,
    originalPrice: 36,
    discount: "5% OFF",
    description: "Fresh, pure homogenized toned milk pasteurised with zero preservatives. Ideal for morning tea, coffee & cereal.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "500 ml Pouch", extraPrice: 0, default: true },
        { name: "1 Litre Pouch", extraPrice: 32 },
        { name: "Family Pack (4 x 1L Tetra)", extraPrice: 240 }
      ],
      addons: [
        { name: "Mother Dairy Curd (400g)", price: 40 },
        { name: "Amul Salted Butter (100g)", price: 58 }
      ]
    }
  },
  {
    id: "groc-2",
    name: "Farm Fresh Organic Hybrid Tomatoes",
    category: "fruits-veggies",
    type: "grocery",
    restaurant: "QuickBite Fresh Farm Direct",
    isVeg: true,
    rating: 4.8,
    reviews: 6500,
    deliveryTime: "10-12 min",
    isExpress: true,
    basePrice: 28,
    originalPrice: 40,
    discount: "30% OFF",
    description: "Plump, handpicked, ripe red tomatoes delivered directly from local hydroponic farms. Triple-washed and hygienic.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "500 grams (Standard)", extraPrice: 0, default: true },
        { name: "1 kg Saver Pack", extraPrice: 24 },
        { name: "2 kg Family Pack", extraPrice: 48 }
      ],
      addons: [
        { name: "Fresh Coriander leaves (100g)", price: 15 },
        { name: "Green Chillies (100g)", price: 12 },
        { name: "Farm Fresh Ginger (100g)", price: 20 }
      ]
    }
  },
  {
    id: "groc-3",
    name: "English Seedless Cucumber (Farm Clean)",
    category: "fruits-veggies",
    type: "grocery",
    restaurant: "QuickBite Fresh Farm Direct",
    isVeg: true,
    rating: 4.8,
    reviews: 3200,
    deliveryTime: "10-12 min",
    isExpress: true,
    basePrice: 35,
    originalPrice: 50,
    discount: "30% OFF",
    description: "Crunchy, sweet seedless cucumbers. Great for fresh green salads, detox juices, and summer cooling raita.",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "500 grams (approx 2-3 pcs)", extraPrice: 0, default: true },
        { name: "1 kg Pack", extraPrice: 32 }
      ],
      addons: [
        { name: "Fresh Mint Leaves (Pudina 100g)", price: 15 },
        { name: "Lemon / Nimbu (4 pcs)", price: 22 }
      ]
    }
  },
  {
    id: "groc-4",
    name: "Lays Gourmet Spanish Tomato & Classic Chips",
    category: "munchies",
    type: "grocery",
    restaurant: "QuickBite Snacks Hub",
    isVeg: true,
    rating: 4.7,
    reviews: 8900,
    deliveryTime: "10-12 min",
    isExpress: true,
    basePrice: 48,
    originalPrice: 50,
    discount: "4% OFF",
    description: "Crispy kettle-cooked potato chips dusted with authentic sun-ripened Spanish tomato essence and herbs.",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Standard 85g Pack", extraPrice: 0, default: true },
        { name: "Party Size 150g Pack", extraPrice: 42 }
      ],
      addons: [
        { name: "Doritos Cheese Nachos (60g)", price: 35 },
        { name: "Salsa Dip Jar (100g)", price: 50 }
      ]
    }
  },
  {
    id: "groc-5",
    name: "Coca-Cola Zero Sugar Can (Chilled 330ml)",
    category: "drinks",
    type: "grocery",
    restaurant: "QuickBite Cold Beverages Vault",
    isVeg: true,
    rating: 4.9,
    reviews: 14200,
    deliveryTime: "10-12 min",
    isExpress: true,
    basePrice: 40,
    originalPrice: 40,
    discount: "Chilled Ready",
    description: "Zero calories, zero sugar, 100% crisp refreshing cola taste. Delivered ice-cold from our quick chillers.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Single Chilled Can (330ml)", extraPrice: 0, default: true },
        { name: "Pack of 2 Cans", extraPrice: 38 },
        { name: "Party Pack of 6 Cans", extraPrice: 185 }
      ],
      addons: [
        { name: "Ice Cubes Pack (1 kg)", price: 30 },
        { name: "Paper Cups & Straws (10 pcs)", price: 25 }
      ]
    }
  },
  {
    id: "groc-6",
    name: "Maggi 2-Minute Special Masala Noodles",
    category: "instant",
    type: "grocery",
    restaurant: "QuickBite Dark Store (Sector 28)",
    isVeg: true,
    rating: 4.9,
    reviews: 24000,
    deliveryTime: "10-12 min",
    isExpress: true,
    basePrice: 58,
    originalPrice: 65,
    discount: "11% OFF",
    description: "India's favorite instant comfort snack with roasted aromatic spices. Ready in just two minutes!",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "Pack of 4 (280g)", extraPrice: 0, default: true },
        { name: "Mega Saver Pack of 8", extraPrice: 55 }
      ],
      addons: [
        { name: "Amul Processed Cheese Cubes (200g)", price: 125 },
        { name: "Kissan Fresh Tomato Ketchup (200g)", price: 35 }
      ]
    }
  },
  {
    id: "groc-7",
    name: "Modern Brown Multi-Grain Bread",
    category: "dairy",
    type: "grocery",
    restaurant: "QuickBite Fresh Bakery Depot",
    isVeg: true,
    rating: 4.8,
    reviews: 4300,
    deliveryTime: "10-12 min",
    isExpress: true,
    basePrice: 55,
    originalPrice: 60,
    discount: "Fresh Batch",
    description: "Baked fresh daily with wholesome wheat, oats, linseed, and sunflower seeds. High fiber and nutritious.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "400g Loaf (Standard)", extraPrice: 0, default: true },
        { name: "Twin Loaf Pack (2 x 400g)", extraPrice: 50 }
      ],
      addons: [
        { name: "Peanut Butter Crunchy (350g)", price: 140 },
        { name: "Mixed Fruit Jam (200g)", price: 45 }
      ]
    }
  },
  {
    id: "groc-8",
    name: "Shimla Crisp Royal Red Apples",
    category: "fruits-veggies",
    type: "grocery",
    restaurant: "QuickBite Fresh Farm Direct",
    isVeg: true,
    rating: 4.7,
    reviews: 2190,
    deliveryTime: "10-12 min",
    isExpress: true,
    basePrice: 110,
    originalPrice: 150,
    discount: "26% OFF",
    description: "Juicy, sweet and crunchy royal red apples sourced directly from Himachal orchards. Cleaned & wax-free.",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "500g (Approx 3-4 apples)", extraPrice: 0, default: true },
        { name: "1 kg Pack (6-8 apples)", extraPrice: 100 }
      ],
      addons: [
        { name: "Robusta Bananas (500g)", price: 35 },
        { name: "Nagpur Sweet Oranges (1 kg)", price: 80 }
      ]
    }
  },
  {
    id: "groc-9",
    name: "Aashirvaad Shudh Superior Chakki Atta",
    category: "staples",
    type: "grocery",
    restaurant: "QuickBite Dark Store (Sector 28)",
    isVeg: true,
    rating: 4.9,
    reviews: 18200,
    deliveryTime: "10-12 min",
    isExpress: true,
    basePrice: 245,
    originalPrice: 280,
    discount: "12% OFF",
    description: "100% pure whole wheat grain flour with 0% maida. Creates ultra soft rotis rich in natural dietary fiber.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "5 kg Bag", extraPrice: 0, default: true },
        { name: "10 kg Saver Bag", extraPrice: 235 }
      ],
      addons: [
        { name: "Tata Salt Iodised (1 kg)", price: 28 },
        { name: "Fortune Sunflower Oil (1L)", price: 135 }
      ]
    }
  },
  {
    id: "groc-10",
    name: "Cadbury Dairy Milk Silk Chocolate (Hazelnut)",
    category: "munchies",
    type: "grocery",
    restaurant: "QuickBite Choco Vault",
    isVeg: true,
    rating: 4.9,
    reviews: 7900,
    deliveryTime: "10-12 min",
    isExpress: true,
    basePrice: 165,
    originalPrice: 175,
    discount: "6% OFF",
    description: "Rich, smooth and creamy milk chocolate loaded with whole roasted Turkish hazelnuts. Delivered chilled.",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80",
    options: {
      portions: [
        { name: "143g Bar", extraPrice: 0, default: true },
        { name: "Twin Pack (2 x 143g)", extraPrice: 155 }
      ],
      addons: [
        { name: "Ferrero Rocher (4 pcs)", price: 160 }
      ]
    }
  }
];

// Dedicated Categories
const FOOD_CATEGORIES = [
  { id: "all", name: "All Cuisines", icon: "✨" },
  { id: "biryani", name: "Biryani & Rice", icon: "🍚" },
  { id: "pizza", name: "Gourmet Pizzas", icon: "🍕" },
  { id: "burger", name: "Burgers & Fries", icon: "🍔" },
  { id: "north-indian", name: "North Indian", icon: "🍲" },
  { id: "south-indian", name: "South Indian", icon: "🥞" },
  { id: "chinese", name: "Indo-Chinese", icon: "🥢" },
  { id: "street-food", name: "Street Bites", icon: "🥘" },
  { id: "desserts", name: "Desserts & Cakes", icon: "🍰" }
];

const GROCERY_CATEGORIES = [
  { id: "all", name: "All Aisles", icon: "⚡" },
  { id: "dairy", name: "Dairy & Bread", icon: "🥛" },
  { id: "fruits-veggies", name: "Fresh Veggies & Fruits", icon: "🥑" },
  { id: "munchies", name: "Chips & Munchies", icon: "🍿" },
  { id: "drinks", name: "Cold Drinks & Juices", icon: "🥤" },
  { id: "instant", name: "Instant Noodles & Snacks", icon: "🍜" },
  { id: "staples", name: "Atta, Rice & Oil", icon: "🌾" }
];

const ALL_CATEGORIES = [
  { id: "all", name: "All Items", icon: "✨" },
  { id: "food", name: "Food Delivery", icon: "🍲" },
  { id: "grocery", name: "10m Groceries", icon: "⚡" },
  { id: "biryani", name: "Biryani", icon: "🍚" },
  { id: "pizza", name: "Pizzas", icon: "🍕" },
  { id: "dairy", name: "Dairy & Milk", icon: "🥛" },
  { id: "fruits-veggies", name: "Fresh Veggies", icon: "🥑" },
  { id: "munchies", name: "Snacks & Munchies", icon: "🍿" },
  { id: "drinks", name: "Cold Drinks", icon: "🥤" }
];

// ==========================================
// 2. APPLICATION STATE
// ==========================================
// Detect if running on food.html, grocery.html, or index.html
const pageType = document.body.dataset.page || "all";

const AppState = {
  pageType: pageType, // 'food', 'grocery', or 'all'
  activeMode: pageType === "grocery" ? "grocery" : "food",
  activeCategory: "all",
  searchQuery: "",
  activeFilters: {
    veg: false,
    express: false,
    rating: false
  },
  sortBy: "popular",
  cart: [],
  appliedCoupon: null,
  activeItemForModal: null,
  modalSelectedOptions: {
    portionIndex: 0,
    crustIndex: 0,
    spiceLevel: "",
    addons: [],
    instruction: "",
    quantity: 1
  },
  currentOrder: null,
  tipAmount: 20
};

// Load Cart from LocalStorage
try {
  const savedCart = localStorage.getItem("quickbite_cart");
  if (savedCart) {
    AppState.cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.warn("Storage access limited:", e);
}

// ==========================================
// 3. DOM ELEMENTS
// ==========================================
const DOM = {
  modeFoodBtn: document.getElementById("modeFoodBtn"),
  modeGroceryBtn: document.getElementById("modeGroceryBtn"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  cartToggleBtn: document.getElementById("cartToggleBtn"),
  cartCountBadge: document.getElementById("cartCountBadge"),
  cartTotalHeader: document.getElementById("cartTotalHeader"),
  headerAiHelpBtn: document.getElementById("headerAiHelpBtn"),
  locationBtn: document.getElementById("locationBtn"),
  currentLocationName: document.getElementById("currentLocationName"),
  locationModalOverlay: document.getElementById("locationModalOverlay"),
  closeLocationModalBtn: document.getElementById("closeLocationModalBtn"),

  // Hero Section
  promoTag: document.getElementById("promoTag"),
  heroHeading: document.getElementById("heroHeading"),
  heroSubtext: document.getElementById("heroSubtext"),
  heroImage: document.getElementById("heroImage"),
  exploreFoodBtn: document.getElementById("exploreFoodBtn"),
  exploreGroceryBtn: document.getElementById("exploreGroceryBtn"),

  // Category & Filters
  categoriesTitle: document.getElementById("categoriesTitle"),
  categoryCarousel: document.getElementById("categoryCarousel"),
  vegOnlyFilter: document.getElementById("vegOnlyFilter"),
  expressFilter: document.getElementById("expressFilter"),
  ratingFilter: document.getElementById("ratingFilter"),
  sortSelect: document.getElementById("sortSelect"),

  // Catalog
  catalogTitle: document.getElementById("catalogTitle"),
  itemCountDisplay: document.getElementById("itemCountDisplay"),
  productGrid: document.getElementById("productGrid"),
  emptyCatalogState: document.getElementById("emptyCatalogState"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),

  // Options Modal
  optionsModalOverlay: document.getElementById("optionsModalOverlay"),
  closeOptionsModalBtn: document.getElementById("closeOptionsModalBtn"),
  modalItemImg: document.getElementById("modalItemImg"),
  modalVegBadge: document.getElementById("modalVegBadge"),
  modalItemCategory: document.getElementById("modalItemCategory"),
  modalItemTitle: document.getElementById("modalItemTitle"),
  modalItemDesc: document.getElementById("modalItemDesc"),
  modalBasePrice: document.getElementById("modalBasePrice"),
  optionsBody: document.getElementById("optionsBody"),
  modalCalculatedTotal: document.getElementById("modalCalculatedTotal"),
  modalQtyMinus: document.getElementById("modalQtyMinus"),
  modalQty: document.getElementById("modalQty"),
  modalQtyPlus: document.getElementById("modalQtyPlus"),
  modalAddToCartFinalBtn: document.getElementById("modalAddToCartFinalBtn"),
  modalBtnPrice: document.getElementById("modalBtnPrice"),

  // Slide-over Cart Drawer
  cartDrawerOverlay: document.getElementById("cartDrawerOverlay"),
  closeCartDrawerBtn: document.getElementById("closeCartDrawerBtn"),
  cartDeliveryCallout: document.getElementById("cartDeliveryCallout"),
  cartEstimatedTime: document.getElementById("cartEstimatedTime"),
  cartItemsList: document.getElementById("cartItemsList"),
  emptyCartView: document.getElementById("emptyCartView"),
  cartFooter: document.getElementById("cartFooter"),
  drawerItemCount: document.getElementById("drawerItemCount"),
  couponInput: document.getElementById("couponInput"),
  applyCouponBtn: document.getElementById("applyCouponBtn"),
  couponFeedback: document.getElementById("couponFeedback"),
  billItemTotal: document.getElementById("billItemTotal"),
  discountRow: document.getElementById("discountRow"),
  billDiscount: document.getElementById("billDiscount"),
  billDeliveryFee: document.getElementById("billDeliveryFee"),
  billTaxes: document.getElementById("billTaxes"),
  billGrandTotal: document.getElementById("billGrandTotal"),
  proceedCheckoutBtn: document.getElementById("proceedCheckoutBtn"),
  checkoutBtnAmount: document.getElementById("checkoutBtnAmount"),
  startShoppingBtn: document.getElementById("startShoppingBtn"),

  // Bottom Floating Cart
  floatingCartBar: document.getElementById("floatingCartBar"),
  floatQty: document.getElementById("floatQty"),
  floatPrice: document.getElementById("floatPrice"),
  floatViewCartBtn: document.getElementById("floatViewCartBtn"),

  // Checkout Modal
  checkoutModalOverlay: document.getElementById("checkoutModalOverlay"),
  closeCheckoutModalBtn: document.getElementById("closeCheckoutModalBtn"),
  checkoutFinalAmount: document.getElementById("checkoutFinalAmount"),
  payNowBtn: document.getElementById("payNowBtn"),

  // Order Tracker Modal
  trackingModalOverlay: document.getElementById("trackingModalOverlay"),
  closeTrackingModalBtn: document.getElementById("closeTrackingModalBtn"),
  trackOrderId: document.getElementById("trackOrderId"),
  trackStatusHeading: document.getElementById("trackStatusHeading"),
  trackEtaTimer: document.getElementById("trackEtaTimer"),
  riderMarker: document.getElementById("riderMarker"),
  callRiderBtn: document.getElementById("callRiderBtn"),
  helpWithOrderBtn: document.getElementById("helpWithOrderBtn"),
  trackDoneBtn: document.getElementById("trackDoneBtn"),

  // AI Chatbot
  chatbotTrigger: document.getElementById("chatbotTrigger"),
  chatbotWindow: document.getElementById("chatbotWindow"),
  closeChatBtn: document.getElementById("closeChatBtn"),
  resetChatBtn: document.getElementById("resetChatBtn"),
  chatMessages: document.getElementById("chatMessages"),
  chatInputForm: document.getElementById("chatInputForm"),
  chatTextInput: document.getElementById("chatTextInput"),

  toastContainer: document.getElementById("toastContainer")
};

// ==========================================
// 4. INITIALIZATION & RENDERING
// ==========================================
function initApp() {
  renderCategories();
  renderProducts();
  updateCartUI();
  setupEventListeners();
  initChatbotDefaults();
}

function getActiveCategoryList() {
  if (AppState.pageType === "food") return FOOD_CATEGORIES;
  if (AppState.pageType === "grocery") return GROCERY_CATEGORIES;
  return AppState.activeMode === "grocery" ? GROCERY_CATEGORIES : FOOD_CATEGORIES;
}

function renderCategories() {
  if (!DOM.categoryCarousel) return;
  DOM.categoryCarousel.innerHTML = "";
  const list = getActiveCategoryList();

  list.forEach(cat => {
    const card = document.createElement("button");
    card.className = `category-card ${AppState.activeCategory === cat.id ? "active" : ""}`;
    card.setAttribute("aria-label", `Filter by ${cat.name}`);
    card.innerHTML = `
      <div class="category-icon-wrap">${cat.icon}</div>
      <span class="category-name">${cat.name}</span>
    `;
    card.addEventListener("click", () => {
      document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      AppState.activeCategory = cat.id;
      renderProducts();
    });
    DOM.categoryCarousel.appendChild(card);
  });
}

function getFilteredProducts() {
  return PRODUCTS.filter(item => {
    // 1. Strict Page Type Isolation:
    if (AppState.pageType === "food" && item.type !== "food") return false;
    if (AppState.pageType === "grocery" && item.type !== "grocery") return false;

    // 2. SuperApp Mode Isolation (on index.html):
    if (AppState.pageType === "all") {
      if (AppState.activeMode === "food" && item.type !== "food") return false;
      if (AppState.activeMode === "grocery" && item.type !== "grocery") return false;
    }

    // 3. Category match:
    if (AppState.activeCategory !== "all") {
      if (item.category !== AppState.activeCategory) return false;
    }

    // 4. Search query match:
    if (AppState.searchQuery) {
      const q = AppState.searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchRest = item.restaurant.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchRest && !matchCat) return false;
    }

    // 5. Veg Only:
    if (AppState.activeFilters.veg && !item.isVeg) return false;

    // 6. Express:
    if (AppState.activeFilters.express && !item.isExpress) return false;

    // 7. Rating:
    if (AppState.activeFilters.rating && item.rating < 4.7) return false;

    return true;
  }).sort((a, b) => {
    if (AppState.sortBy === "time") {
      return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
    } else if (AppState.sortBy === "price-low") {
      return a.basePrice - b.basePrice;
    } else if (AppState.sortBy === "price-high") {
      return b.basePrice - a.basePrice;
    } else if (AppState.sortBy === "rating") {
      return b.rating - a.rating;
    }
    return b.reviews - a.reviews;
  });
}

function renderProducts() {
  if (!DOM.productGrid) return;
  const items = getFilteredProducts();
  DOM.productGrid.innerHTML = "";

  if (items.length === 0) {
    if (DOM.emptyCatalogState) DOM.emptyCatalogState.style.display = "block";
    if (DOM.itemCountDisplay) DOM.itemCountDisplay.textContent = "0 items";
    return;
  }

  if (DOM.emptyCatalogState) DOM.emptyCatalogState.style.display = "none";
  if (DOM.itemCountDisplay) {
    DOM.itemCountDisplay.textContent = `${items.length} ${AppState.activeMode === "grocery" ? "groceries" : "dishes"} available`;
  }

  items.forEach(item => {
    const card = document.createElement("article");
    card.className = "product-card";
    const isFood = item.type === "food";

    card.innerHTML = `
      <div class="card-thumb-wrap">
        <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy">
        <span class="badge-delivery-time ${item.isExpress ? "express" : ""}">
          ${item.isExpress ? "⚡ 10 MINS" : "🍲 " + item.deliveryTime}
        </span>
        <span class="badge-discount">${item.discount}</span>
        <span class="badge-type-pill">${isFood ? "Restaurant Food" : "10-Min Grocery"}</span>
      </div>

      <div class="card-body">
        <div class="card-meta-top">
          <span class="${item.isVeg ? "veg-icon" : "nonveg-icon"}" title="${item.isVeg ? "Vegetarian" : "Non-Vegetarian"}"></span>
          <div class="rating-badge">
            <span>★</span>
            <span>${item.rating}</span>
          </div>
        </div>

        <h3 class="card-title">${item.name}</h3>
        <p class="card-restaurant">${item.restaurant}</p>
        <p class="card-desc">${item.description}</p>

        <div class="card-action-bar">
          <div class="price-box">
            <span class="current-price">₹${item.basePrice}</span>
            <span class="strike-price">₹${item.originalPrice}</span>
          </div>
          <div>
            <button class="btn-add-item ${isFood ? "food-item-btn" : ""}" data-id="${item.id}" aria-label="Add ${item.name} with options">
              <span>ADD</span>
              <span>+</span>
            </button>
            <div class="customizable-tag">Customisable</div>
          </div>
        </div>
      </div>
    `;

    const addBtn = card.querySelector(".btn-add-item");
    addBtn.addEventListener("click", () => openOptionsModal(item));

    DOM.productGrid.appendChild(card);
  });
}

// ==========================================
// 5. CUSTOMIZATION OPTIONS MODAL ENGINE
// ==========================================
function openOptionsModal(item) {
  AppState.activeItemForModal = item;
  AppState.modalSelectedOptions = {
    portionIndex: 0,
    crustIndex: 0,
    spiceLevel: item.options.spiceLevels ? item.options.spiceLevels[0] : "",
    addons: [],
    instruction: "",
    quantity: 1
  };

  DOM.modalItemImg.src = item.image;
  DOM.modalItemImg.alt = item.name;
  DOM.modalItemTitle.textContent = item.name;
  DOM.modalItemDesc.textContent = item.description;
  DOM.modalBasePrice.textContent = `₹${item.basePrice}`;
  DOM.modalItemCategory.textContent = `${item.restaurant} • ${item.type === "food" ? "Restaurant Meal" : "10-Min Grocery"}`;
  DOM.modalVegBadge.className = item.isVeg ? "veg-icon" : "nonveg-icon";

  DOM.optionsBody.innerHTML = "";

  // 1. Portions / Pack Sizes (Radio group)
  if (item.options.portions && item.options.portions.length > 0) {
    const groupCard = document.createElement("div");
    groupCard.className = "option-group-card";
    groupCard.innerHTML = `
      <div class="group-title">
        <span>${item.type === "food" ? "Choose Portion / Size" : "Choose Pack Size / Weight"}</span>
        <span class="badge-flash">REQUIRED</span>
      </div>
      <div class="group-hint">Select one variant</div>
      <div class="option-items-list" id="portionList"></div>
    `;

    const portionList = groupCard.querySelector("#portionList");
    item.options.portions.forEach((portion, idx) => {
      const row = document.createElement("label");
      row.className = `option-row ${idx === 0 ? "selected" : ""}`;
      row.innerHTML = `
        <div class="option-label-wrap">
          <input type="radio" name="modalPortion" value="${idx}" ${idx === 0 ? "checked" : ""}>
          <span class="option-name">${portion.name}</span>
        </div>
        <span class="option-extra-price">${portion.extraPrice > 0 ? "+₹" + portion.extraPrice : "Included"}</span>
      `;
      row.querySelector("input").addEventListener("change", () => {
        portionList.querySelectorAll(".option-row").forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        AppState.modalSelectedOptions.portionIndex = idx;
        updateModalCalculations();
      });
      portionList.appendChild(row);
    });

    DOM.optionsBody.appendChild(groupCard);
  }

  // 2. Crust / Variant Type (e.g. for Pizza)
  if (item.options.crustTypes && item.options.crustTypes.length > 0) {
    const groupCard = document.createElement("div");
    groupCard.className = "option-group-card";
    groupCard.innerHTML = `
      <div class="group-title">
        <span>Choose Crust Style</span>
        <span class="badge-flash">REQUIRED</span>
      </div>
      <div class="group-hint">Select crust preference</div>
      <div class="option-items-list" id="crustList"></div>
    `;

    const crustList = groupCard.querySelector("#crustList");
    item.options.crustTypes.forEach((crust, idx) => {
      const row = document.createElement("label");
      row.className = `option-row ${idx === 0 ? "selected" : ""}`;
      row.innerHTML = `
        <div class="option-label-wrap">
          <input type="radio" name="modalCrust" value="${idx}" ${idx === 0 ? "checked" : ""}>
          <span class="option-name">${crust}</span>
        </div>
      `;
      row.querySelector("input").addEventListener("change", () => {
        crustList.querySelectorAll(".option-row").forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        AppState.modalSelectedOptions.crustIndex = idx;
        updateModalCalculations();
      });
      crustList.appendChild(row);
    });

    DOM.optionsBody.appendChild(groupCard);
  }

  // 3. Spice Levels (for food)
  if (item.options.spiceLevels && item.options.spiceLevels.length > 0) {
    const groupCard = document.createElement("div");
    groupCard.className = "option-group-card";
    groupCard.innerHTML = `
      <div class="group-title">
        <span>Spice Preference 🌶️</span>
      </div>
      <div class="group-hint">Tailored to your taste buds</div>
      <div class="option-items-list" id="spiceList"></div>
    `;

    const spiceList = groupCard.querySelector("#spiceList");
    item.options.spiceLevels.forEach((spice, idx) => {
      const row = document.createElement("label");
      row.className = `option-row ${idx === 0 ? "selected" : ""}`;
      row.innerHTML = `
        <div class="option-label-wrap">
          <input type="radio" name="modalSpice" value="${spice}" ${idx === 0 ? "checked" : ""}>
          <span class="option-name">${spice}</span>
        </div>
      `;
      row.querySelector("input").addEventListener("change", () => {
        spiceList.querySelectorAll(".option-row").forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        AppState.modalSelectedOptions.spiceLevel = spice;
      });
      spiceList.appendChild(row);
    });

    DOM.optionsBody.appendChild(groupCard);
  }

  // 4. Add-ons & Sides
  if (item.options.addons && item.options.addons.length > 0) {
    const groupCard = document.createElement("div");
    groupCard.className = "option-group-card";
    groupCard.innerHTML = `
      <div class="group-title">
        <span>Enhance Your Order (Add-ons)</span>
        <span class="badge-flash" style="background:#E2E8F0; color:#334155">OPTIONAL</span>
      </div>
      <div class="group-hint">Select any sides, dips, or extra pairings</div>
      <div class="option-items-list" id="addonList"></div>
    `;

    const addonList = groupCard.querySelector("#addonList");
    item.options.addons.forEach(addon => {
      const row = document.createElement("label");
      row.className = "option-row";
      row.innerHTML = `
        <div class="option-label-wrap">
          <input type="checkbox" name="modalAddon" value="${addon.name}">
          <span class="option-name">${addon.name}</span>
        </div>
        <span class="option-extra-price">+₹${addon.price}</span>
      `;

      row.querySelector("input").addEventListener("change", (e) => {
        if (e.target.checked) {
          row.classList.add("selected");
          AppState.modalSelectedOptions.addons.push(addon);
        } else {
          row.classList.remove("selected");
          AppState.modalSelectedOptions.addons = AppState.modalSelectedOptions.addons.filter(a => a.name !== addon.name);
        }
        updateModalCalculations();
      });
      addonList.appendChild(row);
    });

    DOM.optionsBody.appendChild(groupCard);
  }

  // 5. Special Instructions
  const noteCard = document.createElement("div");
  noteCard.className = "option-group-card";
  noteCard.innerHTML = `
    <div class="group-title">Special Instructions (Optional)</div>
    <div class="group-hint">e.g. Less spicy, keep chutney separate, ring bell once</div>
    <input type="text" class="instruction-input" id="modalInstructions" placeholder="Write custom notes here...">
  `;
  DOM.optionsBody.appendChild(noteCard);

  DOM.modalQty.textContent = "1";
  updateModalCalculations();

  DOM.optionsModalOverlay.classList.add("open");
  DOM.optionsModalOverlay.setAttribute("aria-hidden", "false");
}

function updateModalCalculations() {
  const item = AppState.activeItemForModal;
  if (!item) return;

  let unitPrice = item.basePrice;

  if (item.options.portions && item.options.portions[AppState.modalSelectedOptions.portionIndex]) {
    unitPrice += item.options.portions[AppState.modalSelectedOptions.portionIndex].extraPrice;
  }

  AppState.modalSelectedOptions.addons.forEach(addon => {
    unitPrice += addon.price;
  });

  const total = unitPrice * AppState.modalSelectedOptions.quantity;
  DOM.modalCalculatedTotal.textContent = `₹${total}`;
  DOM.modalBtnPrice.textContent = `• ₹${total}`;
}

function closeOptionsModal() {
  DOM.optionsModalOverlay.classList.remove("open");
  DOM.optionsModalOverlay.setAttribute("aria-hidden", "true");
  AppState.activeItemForModal = null;
}

function handleConfirmAddToCart() {
  const item = AppState.activeItemForModal;
  if (!item) return;

  const notesInput = document.getElementById("modalInstructions");
  const instruction = notesInput ? notesInput.value.trim() : "";

  const portion = item.options.portions ? item.options.portions[AppState.modalSelectedOptions.portionIndex] : null;
  const crust = item.options.crustTypes ? item.options.crustTypes[AppState.modalSelectedOptions.crustIndex] : null;

  let unitPrice = item.basePrice;
  if (portion) unitPrice += portion.extraPrice;
  AppState.modalSelectedOptions.addons.forEach(a => unitPrice += a.price);

  const cartEntry = {
    cartItemId: "cart-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
    productId: item.id,
    name: item.name,
    restaurant: item.restaurant,
    image: item.image,
    isVeg: item.isVeg,
    type: item.type,
    unitPrice: unitPrice,
    quantity: AppState.modalSelectedOptions.quantity,
    portion: portion ? portion.name : "",
    crust: crust ? crust : "",
    spiceLevel: AppState.modalSelectedOptions.spiceLevel || "",
    addons: [...AppState.modalSelectedOptions.addons],
    instruction: instruction
  };

  AppState.cart.push(cartEntry);
  saveCart();
  updateCartUI();
  closeOptionsModal();

  DOM.cartCountBadge.classList.add("bump");
  setTimeout(() => DOM.cartCountBadge.classList.remove("bump"), 350);

  showToast(`Added "${item.name}" with options to your cart! 🛒`, "success");
}

// ==========================================
// 6. CART STATE & CALCULATIONS
// ==========================================
function saveCart() {
  try {
    localStorage.setItem("quickbite_cart", JSON.stringify(AppState.cart));
  } catch (e) {
    console.warn("Storage write error:", e);
  }
}

function getCartCalculations() {
  const itemCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const itemTotal = AppState.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

  let discount = 0;
  if (AppState.appliedCoupon === "QUICK50") {
    discount = Math.min(Math.round(itemTotal * 0.5), 100);
  } else if (AppState.appliedCoupon === "BLINK10") {
    discount = 50;
  }

  const deliveryFee = AppState.appliedCoupon === "FREEDEL" || itemTotal === 0 ? 0 : 25;
  const taxes = itemTotal > 0 ? 15 : 0;
  const grandTotal = Math.max(0, itemTotal - discount + deliveryFee + taxes + (itemTotal > 0 ? AppState.tipAmount : 0));

  return { itemCount, itemTotal, discount, deliveryFee, taxes, grandTotal };
}

function updateCartUI() {
  const { itemCount, itemTotal, discount, deliveryFee, taxes, grandTotal } = getCartCalculations();

  if (DOM.cartCountBadge) DOM.cartCountBadge.textContent = itemCount;
  if (DOM.cartTotalHeader) DOM.cartTotalHeader.textContent = `₹${grandTotal}`;
  if (DOM.drawerItemCount) DOM.drawerItemCount.textContent = `${itemCount} items`;

  if (DOM.floatingCartBar) {
    if (itemCount > 0) {
      DOM.floatingCartBar.style.display = "block";
      DOM.floatQty.textContent = `${itemCount} ${itemCount === 1 ? "Item" : "Items"}`;
      DOM.floatPrice.textContent = `₹${grandTotal}`;
    } else {
      DOM.floatingCartBar.style.display = "none";
    }
  }

  if (!DOM.cartItemsList) return;

  if (AppState.cart.length === 0) {
    DOM.cartItemsList.style.display = "none";
    DOM.cartFooter.style.display = "none";
    DOM.emptyCartView.style.display = "flex";
    return;
  }

  DOM.cartItemsList.style.display = "flex";
  DOM.cartFooter.style.display = "block";
  DOM.emptyCartView.style.display = "none";

  DOM.cartItemsList.innerHTML = "";
  AppState.cart.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "cart-item-row";

    const details = [];
    if (item.portion) details.push(item.portion);
    if (item.crust) details.push(item.crust);
    if (item.spiceLevel) details.push(item.spiceLevel);
    if (item.addons && item.addons.length > 0) {
      details.push("Addons: " + item.addons.map(a => a.name).join(", "));
    }
    if (item.instruction) {
      details.push(`Note: "${item.instruction}"`);
    }

    row.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-title-wrap">
          <span class="${item.isVeg ? "veg-icon" : "nonveg-icon"}"></span>
          <span class="cart-item-title">${item.name}</span>
        </div>
        ${details.length > 0 ? `<div class="cart-item-customs">${details.join(" • ")}</div>` : ""}
        <div class="cart-item-price">₹${item.unitPrice * item.quantity} (₹${item.unitPrice} each)</div>
      </div>

      <div class="cart-item-actions">
        <div class="cart-item-stepper">
          <button class="cart-minus-btn" data-index="${index}">-</button>
          <span>${item.quantity}</span>
          <button class="cart-plus-btn" data-index="${index}">+</button>
        </div>
      </div>
    `;

    row.querySelector(".cart-minus-btn").addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        AppState.cart.splice(index, 1);
      }
      saveCart();
      updateCartUI();
    });

    row.querySelector(".cart-plus-btn").addEventListener("click", () => {
      item.quantity++;
      saveCart();
      updateCartUI();
    });

    DOM.cartItemsList.appendChild(row);
  });

  DOM.billItemTotal.textContent = `₹${itemTotal}`;
  if (discount > 0) {
    DOM.discountRow.style.display = "flex";
    DOM.billDiscount.textContent = `-₹${discount}`;
  } else {
    DOM.discountRow.style.display = "none";
  }
  DOM.billDeliveryFee.textContent = deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`;
  DOM.billTaxes.textContent = `₹${taxes}`;
  DOM.billGrandTotal.textContent = `₹${grandTotal}`;
  DOM.checkoutBtnAmount.textContent = `₹${grandTotal}`;
  DOM.checkoutFinalAmount.textContent = `₹${grandTotal}`;

  const hasGroceries = AppState.cart.some(i => i.type === "grocery");
  const hasFood = AppState.cart.some(i => i.type === "food");
  if (hasGroceries && !hasFood) {
    DOM.cartEstimatedTime.textContent = "10-12 mins (Blinkit Dark Store Express)";
  } else if (hasFood && !hasGroceries) {
    DOM.cartEstimatedTime.textContent = "25-30 mins (Fresh from Kitchen)";
  } else {
    DOM.cartEstimatedTime.textContent = "15-20 mins (Multi-stop Express)";
  }
}

// ==========================================
// 7. COUPONS & CHECKOUT
// ==========================================
function applyCoupon() {
  const code = DOM.couponInput.value.trim().toUpperCase();
  if (!code) return;

  if (code === "QUICK50") {
    AppState.appliedCoupon = "QUICK50";
    DOM.couponFeedback.className = "coupon-feedback success";
    DOM.couponFeedback.style.display = "block";
    DOM.couponFeedback.textContent = "🎉 'QUICK50' applied! 50% discount up to ₹100 deducted.";
  } else if (code === "BLINK10") {
    AppState.appliedCoupon = "BLINK10";
    DOM.couponFeedback.className = "coupon-feedback success";
    DOM.couponFeedback.style.display = "block";
    DOM.couponFeedback.textContent = "⚡ 'BLINK10' applied! Flat ₹50 instant grocery discount.";
  } else if (code === "FREEDEL") {
    AppState.appliedCoupon = "FREEDEL";
    DOM.couponFeedback.className = "coupon-feedback success";
    DOM.couponFeedback.style.display = "block";
    DOM.couponFeedback.textContent = "🚀 'FREEDEL' applied! Delivery partner fee waived.";
  } else {
    DOM.couponFeedback.className = "coupon-feedback error";
    DOM.couponFeedback.style.display = "block";
    DOM.couponFeedback.textContent = "Invalid coupon code. Try QUICK50, BLINK10, or FREEDEL.";
  }

  updateCartUI();
}

function openCheckout() {
  if (AppState.cart.length === 0) {
    showToast("Your cart is empty! Add items first.", "error");
    return;
  }
  closeCartDrawer();
  const { grandTotal } = getCartCalculations();
  DOM.checkoutFinalAmount.textContent = `₹${grandTotal}`;
  DOM.checkoutModalOverlay.classList.add("open");
  DOM.checkoutModalOverlay.setAttribute("aria-hidden", "false");
}

function closeCheckout() {
  DOM.checkoutModalOverlay.classList.remove("open");
  DOM.checkoutModalOverlay.setAttribute("aria-hidden", "true");
}

function handlePlaceOrder() {
  const { grandTotal, itemCount } = getCartCalculations();
  const orderId = "QB-" + Math.floor(10000 + Math.random() * 90000);

  AppState.currentOrder = {
    id: orderId,
    amount: grandTotal,
    items: [...AppState.cart],
    itemCount: itemCount,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: "Confirmed",
    eta: AppState.cart.some(i => i.type === "grocery") && !AppState.cart.some(i => i.type === "food") ? "10 mins" : "25 mins"
  };

  AppState.cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();

  openOrderTracker(AppState.currentOrder);
  showToast(`🎉 Order ${orderId} confirmed successfully!`, "success");
}

// ==========================================
// 8. LIVE ORDER TRACKING
// ==========================================
function openOrderTracker(order) {
  DOM.trackOrderId.textContent = `Order #${order.id}`;
  DOM.trackEtaTimer.textContent = order.eta;
  DOM.trackingModalOverlay.classList.add("open");
  DOM.trackingModalOverlay.setAttribute("aria-hidden", "false");

  document.getElementById("step1").className = "step-item completed";
  document.getElementById("step2").className = "step-item active";
  document.getElementById("step3").className = "step-item";
  document.getElementById("step4").className = "step-item";
  DOM.trackStatusHeading.textContent = "Order Accepted & Packing in Progress";

  DOM.riderMarker.style.left = "20%";

  setTimeout(() => {
    DOM.riderMarker.style.left = "50%";
    document.getElementById("step2").className = "step-item completed";
    document.getElementById("step3").className = "step-item active";
    DOM.trackStatusHeading.textContent = "Rahul is Speeding Towards You 🛵";
    DOM.trackEtaTimer.textContent = "6 mins";
  }, 4000);

  setTimeout(() => {
    DOM.riderMarker.style.left = "80%";
    DOM.trackEtaTimer.textContent = "2 mins";
    DOM.trackStatusHeading.textContent = "Arriving at Your Gate!";
  }, 8500);
}

function closeOrderTracker() {
  DOM.trackingModalOverlay.classList.remove("open");
  DOM.trackingModalOverlay.setAttribute("aria-hidden", "true");
}

// ==========================================
// 9. AI CUSTOMER SUPPORT CHATBOT (QuickBot AI)
// ==========================================
function initChatbotDefaults() {
  const isFoodPage = AppState.pageType === "food";
  const isGroceryPage = AppState.pageType === "grocery";

  if (isFoodPage) {
    addBotMessage("👋 Hello! I am **QuickBot Food Assistant**. Need help with your meal order, late delivery, cold food, or refunds? Tap a quick option below or type your question!");
  } else if (isGroceryPage) {
    addBotMessage("⚡ Hello! I am **QuickBot Grocery Assistant**. Need help with 10-min delivery, missing milk/veggies, spoiled items, or UPI payments? Tap below or ask me!");
  } else {
    addBotMessage("👋 Hello! I am **QuickBot AI**, your 24x7 Food & Grocery Assistant. How can I help you with orders, refunds, or payment issues today?");
  }
}

function toggleChatbot() {
  const isOpen = DOM.chatbotWindow.classList.contains("open");
  if (isOpen) {
    DOM.chatbotWindow.classList.remove("open");
    DOM.chatbotWindow.setAttribute("aria-hidden", "true");
  } else {
    DOM.chatbotWindow.classList.add("open");
    DOM.chatbotWindow.setAttribute("aria-hidden", "false");
    DOM.chatTextInput.focus();
  }
}

function addBotMessage(text, actionButtons = null) {
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble bot";

  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/\n/g, '<br>');

  bubble.innerHTML = `
    <div>${formatted}</div>
    <span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
  `;

  if (actionButtons && actionButtons.length > 0) {
    const btnGroup = document.createElement("div");
    btnGroup.className = "chat-action-btn-group";
    actionButtons.forEach(btnInfo => {
      const btn = document.createElement("button");
      btn.className = "chat-action-btn";
      btn.textContent = btnInfo.label;
      btn.addEventListener("click", btnInfo.onClick);
      btnGroup.appendChild(btn);
    });
    bubble.appendChild(btnGroup);
  }

  DOM.chatMessages.appendChild(bubble);
  DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

function addUserMessage(text) {
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble user";
  bubble.innerHTML = `
    <div>${text}</div>
    <span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
  `;
  DOM.chatMessages.appendChild(bubble);
  DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

function showTypingIndicator() {
  const typing = document.createElement("div");
  typing.className = "typing-dots";
  typing.id = "botTypingIndicator";
  typing.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  DOM.chatMessages.appendChild(typing);
  DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById("botTypingIndicator");
  if (typing) typing.remove();
}

function processAiQuery(query) {
  const q = query.toLowerCase();
  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();

    // 1. PAYMENT ISSUES
    if (q.includes("payment") || q.includes("failed") || q.includes("deducted") || q.includes("upi") || q.includes("double charge") || q.includes("money deducted")) {
      const ticketId = "PAY-" + Math.floor(100000 + Math.random() * 900000);
      addBotMessage(
        `💳 **Payment Assistance Resolution**\n\nI checked our banking gateway logs. Your funds are 100% safe!\n\n• **Ticket Created**: **#${ticketId}** with NPCI.\n• **Auto-Reversal**: It will automatically reflect back in your bank within **15 minutes**.\n• Or receive ₹${AppState.currentOrder ? AppState.currentOrder.amount : 250} instantly to your **QuickBite Wallet** right now!`,
        [
          {
            label: "⚡ Credit to QuickBite Wallet",
            onClick: () => {
              showToast("₹250 credited to QuickBite Wallet!", "success");
              addBotMessage("✅ **Success!** ₹250 has been credited to your QuickBite Wallet. Use it immediately for meals or groceries!");
            }
          },
          {
            label: "Check Bank Reference (UTR)",
            onClick: () => {
              addBotMessage(`ℹ️ Bank Reference UTR: **UTR${Math.floor(100000000000 + Math.random() * 900000000000)}**. Share this with your bank if needed.`);
            }
          }
        ]
      );
      return;
    }

    // 2. ORDER STATUS
    if (q.includes("track") || q.includes("where") || q.includes("status") || q.includes("order") || q.includes("meal")) {
      if (AppState.currentOrder) {
        addBotMessage(
          `🛵 **Live Tracking for Order #${AppState.currentOrder.id}**\n\n• Status: **${AppState.currentOrder.status}**\n• Estimated Arrival: **${AppState.currentOrder.eta}**\n• Partner: **Rahul Sharma (⭐ 4.9)**\n• Delivery to: **Home (DLF Cyber City)**`,
          [
            {
              label: "🗺️ Open Live Route Tracker",
              onClick: () => {
                toggleChatbot();
                openOrderTracker(AppState.currentOrder);
              }
            },
            {
              label: "📞 Call Delivery Partner",
              onClick: () => {
                showToast("Connecting call to Rahul (Delivery Partner)...", "success");
              }
            }
          ]
        );
      } else {
        addBotMessage(
          `You have no running active deliveries right now. Ready to order hot food or 10-minute groceries?`,
          [
            {
              label: "Order Food",
              onClick: () => {
                toggleChatbot();
                window.location.href = "food.html";
              }
            },
            {
              label: "Order Groceries",
              onClick: () => {
                toggleChatbot();
                window.location.href = "grocery.html";
              }
            }
          ]
        );
      }
      return;
    }

    // 3. MISSING OR DAMAGED ITEMS
    if (q.includes("missing") || q.includes("spoiled") || q.includes("bad") || q.includes("wrong") || q.includes("cold") || q.includes("damaged")) {
      const ticketId = "QC-" + Math.floor(10000 + Math.random() * 90000);
      addBotMessage(
        `🥑 **QuickBite Quality Assurance**\n\nWe apologize for this inconvenience! We maintain strict 100% quality standards.\n\nTicket created: **#${ticketId}**.\n\nHow would you like us to resolve this immediately?`,
        [
          {
            label: "⚡ Dispatch 10-Min Free Replacement",
            onClick: () => {
              showToast("Express replacement dispatched!", "success");
              addBotMessage("🚀 **Express Replacement Dispatched!** Our nearest dark store rider has picked up a fresh replacement. ETA: 10 mins.");
            }
          },
          {
            label: "💸 Instant 100% Refund",
            onClick: () => {
              showToast("100% Refund processed!", "success");
              addBotMessage("💰 **Refund Approved!** 100% refund has been processed back to your original payment mode.");
            }
          }
        ]
      );
      return;
    }

    // 4. REFUND STATUS
    if (q.includes("refund") || q.includes("claim") || q.includes("return")) {
      addBotMessage(
        `💸 **Instant Refund Policy**\n\nAll QuickBite refunds are processed automatically:\n1. Missing/Damaged items: Instant approval in <2 minutes\n2. Order cancellation: Full refund within 15 minutes\n3. Bank failures: Instant wallet credit or direct bank reversal.`
      );
      return;
    }

    // 5. RECOMMENDATIONS
    if (q.includes("recommend") || q.includes("suggest") || q.includes("tasty") || q.includes("dinner") || q.includes("hungry") || q.includes("snack")) {
      addBotMessage(
        `🍕 **QuickBite Chef's Recommendations:**\n\n1. 🍲 **Royal Hyderabadi Dum Biryani** (⭐ 4.8)\n2. 🧀 **Wood-Fired Farmhouse Pizza** with Cheese Burst\n3. 🍔 **Crispy Peri-Peri Chicken Burger** (15 min delivery)\n4. 🍫 **Belgian Chocolate Lava Cake**\n5. 🍿 **Lays Gourmet + Chilled Coke Zero** for quick snacking!`
      );
      return;
    }

    // GENERAL FALLBACK
    addBotMessage(
      `I'm here to help with anything on **QuickBite**! Ask about order tracking, payment or refund questions, food quality, or missing groceries.\n\nYou can also contact our manager at **support@quickbite.com**.`
    );
  }, 600);
}

// ==========================================
// 10. EVENT LISTENERS
// ==========================================
function setMode(mode) {
  AppState.activeMode = mode;
  AppState.activeCategory = "all";

  if (DOM.modeFoodBtn && DOM.modeGroceryBtn) {
    if (mode === "food") {
      DOM.modeFoodBtn.classList.add("active");
      DOM.modeGroceryBtn.classList.remove("active");
      if (DOM.categoriesTitle) DOM.categoriesTitle.textContent = "Explore Top Food & Restaurants";
      if (DOM.catalogTitle) DOM.catalogTitle.textContent = "Top Rated Restaurants & Dishes";
      if (DOM.promoTag) DOM.promoTag.textContent = "🍲 ZOMATO & SWIGGY GOURMET FOOD";
      if (DOM.heroHeading) DOM.heroHeading.textContent = "Piping Hot Restaurant Meals Delivered in 25 Mins";
      if (DOM.heroSubtext) DOM.heroSubtext.textContent = "Biryani, artisan pizzas, juicy burgers & classic North Indian curries from top verified kitchens.";
      if (DOM.heroImage) DOM.heroImage.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80";
    } else {
      DOM.modeGroceryBtn.classList.add("active");
      DOM.modeFoodBtn.classList.remove("active");
      if (DOM.categoriesTitle) DOM.categoriesTitle.textContent = "10-Minute Blinkit Groceries & Daily Needs";
      if (DOM.catalogTitle) DOM.catalogTitle.textContent = "Instant 10-Minute Groceries & Essentials";
      if (DOM.promoTag) DOM.promoTag.textContent = "⚡ 10-MINUTE BLINKIT SPEED GROCERY DELIVERY";
      if (DOM.heroHeading) DOM.heroHeading.textContent = "Daily Milk, Fresh Veggies & Munchies in 10 Minutes";
      if (DOM.heroSubtext) DOM.heroSubtext.textContent = "Dark store located right in your neighborhood. Handpicked organic vegetables, dairy, cold drinks & bread.";
      if (DOM.heroImage) DOM.heroImage.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80";
    }
  }

  renderCategories();
  renderProducts();
}

function openCartDrawer() {
  DOM.cartDrawerOverlay.classList.add("open");
  DOM.cartDrawerOverlay.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  DOM.cartDrawerOverlay.classList.remove("open");
  DOM.cartDrawerOverlay.setAttribute("aria-hidden", "true");
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === "success" ? "✓" : "⚠️"}</span>
    <span>${message}</span>
  `;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function setupEventListeners() {
  // Mode Buttons (for index.html)
  if (DOM.modeFoodBtn && DOM.modeGroceryBtn) {
    DOM.modeFoodBtn.addEventListener("click", () => setMode("food"));
    DOM.modeGroceryBtn.addEventListener("click", () => setMode("grocery"));
  }

  if (DOM.exploreFoodBtn) {
    DOM.exploreFoodBtn.addEventListener("click", () => {
      setMode("food");
      const cat = document.getElementById("catalogSection");
      if (cat) cat.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (DOM.exploreGroceryBtn) {
    DOM.exploreGroceryBtn.addEventListener("click", () => {
      setMode("grocery");
      const cat = document.getElementById("catalogSection");
      if (cat) cat.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Search Input
  if (DOM.searchInput) {
    DOM.searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value.trim();
      if (DOM.clearSearchBtn) DOM.clearSearchBtn.style.display = AppState.searchQuery ? "block" : "none";
      renderProducts();
    });
  }
  if (DOM.clearSearchBtn) {
    DOM.clearSearchBtn.addEventListener("click", () => {
      DOM.searchInput.value = "";
      AppState.searchQuery = "";
      DOM.clearSearchBtn.style.display = "none";
      renderProducts();
    });
  }

  // Filter Buttons
  if (DOM.vegOnlyFilter) {
    DOM.vegOnlyFilter.addEventListener("click", () => {
      AppState.activeFilters.veg = !AppState.activeFilters.veg;
      DOM.vegOnlyFilter.classList.toggle("active", AppState.activeFilters.veg);
      renderProducts();
    });
  }

  if (DOM.expressFilter) {
    DOM.expressFilter.addEventListener("click", () => {
      AppState.activeFilters.express = !AppState.activeFilters.express;
      DOM.expressFilter.classList.toggle("active", AppState.activeFilters.express);
      renderProducts();
    });
  }

  if (DOM.ratingFilter) {
    DOM.ratingFilter.addEventListener("click", () => {
      AppState.activeFilters.rating = !AppState.activeFilters.rating;
      DOM.ratingFilter.classList.toggle("active", AppState.activeFilters.rating);
      renderProducts();
    });
  }

  if (DOM.sortSelect) {
    DOM.sortSelect.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      renderProducts();
    });
  }

  if (DOM.resetFiltersBtn) {
    DOM.resetFiltersBtn.addEventListener("click", () => {
      AppState.activeFilters = { veg: false, express: false, rating: false };
      AppState.searchQuery = "";
      if (DOM.searchInput) DOM.searchInput.value = "";
      if (DOM.clearSearchBtn) DOM.clearSearchBtn.style.display = "none";
      if (DOM.vegOnlyFilter) DOM.vegOnlyFilter.classList.remove("active");
      if (DOM.expressFilter) DOM.expressFilter.classList.remove("active");
      if (DOM.ratingFilter) DOM.ratingFilter.classList.remove("active");
      AppState.activeCategory = "all";
      renderCategories();
      renderProducts();
    });
  }

  // Options Modal Stepper & Add
  if (DOM.closeOptionsModalBtn) DOM.closeOptionsModalBtn.addEventListener("click", closeOptionsModal);
  if (DOM.modalQtyMinus) {
    DOM.modalQtyMinus.addEventListener("click", () => {
      if (AppState.modalSelectedOptions.quantity > 1) {
        AppState.modalSelectedOptions.quantity--;
        DOM.modalQty.textContent = AppState.modalSelectedOptions.quantity;
        updateModalCalculations();
      }
    });
  }
  if (DOM.modalQtyPlus) {
    DOM.modalQtyPlus.addEventListener("click", () => {
      AppState.modalSelectedOptions.quantity++;
      DOM.modalQty.textContent = AppState.modalSelectedOptions.quantity;
      updateModalCalculations();
    });
  }
  if (DOM.modalAddToCartFinalBtn) DOM.modalAddToCartFinalBtn.addEventListener("click", handleConfirmAddToCart);

  // Cart Drawer
  if (DOM.cartToggleBtn) DOM.cartToggleBtn.addEventListener("click", openCartDrawer);
  if (DOM.floatViewCartBtn) DOM.floatViewCartBtn.addEventListener("click", openCartDrawer);
  if (DOM.closeCartDrawerBtn) DOM.closeCartDrawerBtn.addEventListener("click", closeCartDrawer);
  if (DOM.startShoppingBtn) {
    DOM.startShoppingBtn.addEventListener("click", () => {
      closeCartDrawer();
      const sec = document.querySelector(".catalog-section");
      if (sec) sec.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Coupon
  if (DOM.applyCouponBtn) DOM.applyCouponBtn.addEventListener("click", applyCoupon);
  if (DOM.couponInput) {
    DOM.couponInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        applyCoupon();
      }
    });
  }

  // Checkout
  if (DOM.proceedCheckoutBtn) DOM.proceedCheckoutBtn.addEventListener("click", openCheckout);
  if (DOM.closeCheckoutModalBtn) DOM.closeCheckoutModalBtn.addEventListener("click", closeCheckout);
  if (DOM.payNowBtn) DOM.payNowBtn.addEventListener("click", handlePlaceOrder);

  // Tip Pills
  document.querySelectorAll(".tip-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".tip-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      AppState.tipAmount = parseInt(pill.getAttribute("data-tip"));
      updateCartUI();
    });
  });

  // Tracking Modal
  if (DOM.closeTrackingModalBtn) DOM.closeTrackingModalBtn.addEventListener("click", closeOrderTracker);
  if (DOM.trackDoneBtn) DOM.trackDoneBtn.addEventListener("click", closeOrderTracker);
  if (DOM.callRiderBtn) {
    DOM.callRiderBtn.addEventListener("click", () => {
      showToast("Calling Rahul Sharma (Rider)... Connecting line.", "success");
    });
  }
  if (DOM.helpWithOrderBtn) {
    DOM.helpWithOrderBtn.addEventListener("click", () => {
      closeOrderTracker();
      toggleChatbot();
      addBotMessage(`I see your active delivery **#${AppState.currentOrder ? AppState.currentOrder.id : "QB-84920"}**! How can I assist you right now?`);
    });
  }

  // AI Chatbot
  if (DOM.chatbotTrigger) DOM.chatbotTrigger.addEventListener("click", toggleChatbot);
  if (DOM.closeChatBtn) DOM.closeChatBtn.addEventListener("click", toggleChatbot);
  if (DOM.headerAiHelpBtn) DOM.headerAiHelpBtn.addEventListener("click", toggleChatbot);
  if (DOM.resetChatBtn) {
    DOM.resetChatBtn.addEventListener("click", () => {
      DOM.chatMessages.innerHTML = "";
      initChatbotDefaults();
    });
  }

  if (DOM.chatInputForm) {
    DOM.chatInputForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = DOM.chatTextInput.value.trim();
      if (!text) return;
      addUserMessage(text);
      DOM.chatTextInput.value = "";
      processAiQuery(text);
    });
  }

  // Chat Topic Chips
  document.querySelectorAll(".topic-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.getAttribute("data-query");
      addUserMessage(q);
      processAiQuery(q);
    });
  });

  // Location Modal
  if (DOM.locationBtn) {
    DOM.locationBtn.addEventListener("click", () => {
      DOM.locationModalOverlay.classList.add("open");
      DOM.locationModalOverlay.setAttribute("aria-hidden", "false");
    });
  }
  if (DOM.closeLocationModalBtn) {
    DOM.closeLocationModalBtn.addEventListener("click", () => {
      DOM.locationModalOverlay.classList.remove("open");
      DOM.locationModalOverlay.setAttribute("aria-hidden", "true");
    });
  }
  document.querySelectorAll(".address-card-select").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".address-card-select").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      if (DOM.currentLocationName) DOM.currentLocationName.textContent = card.getAttribute("data-name");
      DOM.locationModalOverlay.classList.remove("open");
      showToast(`Delivery location set to ${card.getAttribute("data-name")}`, "success");
    });
  });

  // Backdrop clicks
  window.addEventListener("click", (e) => {
    if (e.target === DOM.optionsModalOverlay) closeOptionsModal();
    if (e.target === DOM.cartDrawerOverlay) closeCartDrawer();
    if (e.target === DOM.checkoutModalOverlay) closeCheckout();
    if (e.target === DOM.trackingModalOverlay) closeOrderTracker();
    if (e.target === DOM.locationModalOverlay) DOM.locationModalOverlay.classList.remove("open");
  });

  // Header scroll shadow
  window.addEventListener("scroll", () => {
    const header = document.getElementById("mainHeader");
    if (header) {
      if (window.scrollY > 20) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
  });
}

document.addEventListener("DOMContentLoaded", initApp);
