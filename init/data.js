const defaultOwnerId = process.env.OWNER_ID;

const commonAmenities = [
  "WiFi",
  "Kitchen",
  "Free Parking",
  "Air Conditioning",
  "Heating",
  "Hot Water",
  "TV",
  "Balcony",
  "Garden",
  "Security Camera",
  "First Aid Kit",
  "Fire Extinguisher",
];
const sampleListings = [
  {
    title: "Hotel Paris",
    description:
      "Romantic hotel in Paris with elegant interiors and great ambiance. Ideal for couples looking for a memorable stay.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Hotels2.jpg",
    },
    price: 2800,
    location: "Paris",
    country: "France",
    category: "Hotels",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Beautiful and romantic place.",
      },
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Great service and location.",
      },
    ],
  },
  {
    title: "Forest Cabin",
    description:
      "Peaceful cabin located deep in the forests of Canada. A perfect retreat for nature lovers looking to disconnect and relax.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Cabins2.jpg",
    },
    price: 1200,
    location: "Canada",
    country: "Canada",
    category: "Cabins",
    owner: defaultOwnerId,
    amenities: [...commonAmenities, "BBQ"],
    reviews: [
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Very quiet and relaxing environment.",
      },
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Perfect escape from city life.",
      },
    ],
  },
  {
    title: "Luxury Apartment Mumbai",
    description:
      "Modern apartment with a stunning skyline view of Mumbai city. Perfect for a comfortable stay with premium interiors and easy access to major attractions.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Apartments1.jpg",
    },
    price: 1800,
    location: "Mumbai",
    country: "India",
    category: "Apartments",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Amazing skyline view and very clean apartment.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Great location with all essential amenities available.",
      },
    ],
  },
  {
    title: "TreeHouse Kerala",
    description:
      "Unique treehouse stay surrounded by lush greenery in Kerala. Perfect for a peaceful escape close to nature.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/TreeHouse1.jpg",
    },
    price: 1800,
    location: "Kerala",
    country: "India",
    category: "TreeHouses",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Very unique and fun experience.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Great view from the top.",
      },
    ],
  },
  {
    title: "Apartment Bangalore",
    description:
      "Comfortable apartment located near major IT hubs in Bangalore. Ideal for business travelers looking for convenience and a peaceful stay.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Apartments2.jpg",
    },
    price: 1400,
    location: "Bangalore",
    country: "India",
    category: "Apartments",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Very convenient location for office work.",
      },
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Clean rooms and smooth check-in experience.",
      },
    ],
  },
  {
    title: "Houseboat Kerala",
    description:
      "Enjoy a peaceful stay on the scenic backwaters of Kerala. A perfect blend of nature, comfort, and traditional hospitality.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/HouseBoats1.jpg",
    },
    price: 2000,
    location: "Kerala",
    country: "India",
    category: "HouseBoats",
    owner: defaultOwnerId,
    amenities: [...commonAmenities, "Lake View", "Meals"],
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Beautiful backwater views with relaxing experience.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Tasty food and friendly staff onboard.",
      },
    ],
  },
  {
    title: "Luxury Houseboat",
    description:
      "Premium houseboat offering a luxurious stay on calm waters. Features a private deck and beautiful river views for a relaxing getaway.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/HouseBoats2.jpg",
    },
    price: 2500,
    location: "Alleppey",
    country: "India",
    category: "HouseBoats",
    owner: defaultOwnerId,
    amenities: [...commonAmenities, "Deck", "River View"],
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Private deck view was absolutely relaxing.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Comfortable stay with peaceful surroundings.",
      },
    ],
  },
  {
    title: "Arctic Igloo",
    description:
      "Experience a magical stay under the northern lights in Finland. Glass roof igloo lets you enjoy stunning night sky views from your bed.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Artics1.jpg",
    },
    price: 4000,
    location: "Finland",
    country: "Finland",
    category: "Artic",
    owner: defaultOwnerId,
    amenities: [...commonAmenities, "Glass Roof"],
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Watching northern lights from bed was unforgettable.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Unique and cozy stay in extreme cold.",
      },
    ],
  },
  {
    title: "Goa Resort",
    description:
      "Beautiful beachside resort in Goa with modern facilities. Perfect for a relaxing vacation with pool and direct beach access.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Resorts1.jpg",
    },
    price: 2200,
    location: "Goa",
    country: "India",
    category: "Resorts",
    owner: defaultOwnerId,
    amenities: [...commonAmenities, "Swimming Pool"],
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Loved the beach access and clean pool.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Staff was helpful and service was good.",
      },
    ],
  },
  {
    title: "Cabin Manali",
    description:
      "Cozy mountain cabin in Manali surrounded by scenic views. Ideal for a peaceful getaway in nature with fresh air and calm vibes.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Cabins1.jpg",
    },
    price: 1000,
    location: "Manali",
    country: "India",
    category: "Cabins",
    owner: defaultOwnerId,
    amenities: [...commonAmenities, "Fireplace"],
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Beautiful mountain view and cozy stay.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Peaceful location perfect for relaxing.",
      },
    ],
  },
  {
    title: "Snow Arctic Cabin",
    description:
      "Cozy wooden cabin surrounded by snowy landscapes in Norway. Perfect for a peaceful winter escape with warm interiors and scenic views.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Artics2.jpg",
    },
    price: 3500,
    location: "Norway",
    country: "Norway",
    category: "Artic",
    owner: defaultOwnerId,
    amenities: [...commonAmenities, "Fireplace"],
    reviews: [
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Super cozy stay with amazing snow views.",
      },
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Felt like a dream winter getaway.",
      },
    ],
  },

  {
    title: "Maldives Resort",
    description:
      "Luxury island resort offering stunning overwater villas and crystal-clear ocean views. Ideal for a premium vacation with world-class facilities.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Resorts2.jpg",
    },
    price: 5000,
    location: "Maldives",
    country: "Maldives",
    category: "Resorts",
    owner: defaultOwnerId,
    amenities: [...commonAmenities, "Ocean View"],
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Absolutely stunning views and luxurious stay.",
      },
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Worth every rupee for the experience.",
      },
    ],
  },
  {
    title: "Riad Morocco",
    description:
      "Traditional Moroccan riad with beautiful interiors and peaceful courtyard. Offers an authentic cultural stay in the heart of Marrakech.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Riads1.jpg",
    },
    price: 1500,
    location: "Marrakech",
    country: "Morocco",
    category: "Riads",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Loved the authentic vibe and decor.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Very peaceful and well maintained place.",
      },
    ],
  },
  {
    title: "Luxury Riad",
    description:
      "Elegant riad offering a blend of traditional design and modern comfort. Perfect for a relaxing and stylish stay in Morocco.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Riads3.jpg",
    },
    price: 1800,
    location: "Morocco",
    country: "Morocco",
    category: "Riads",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Beautiful interiors and great service.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Comfortable stay with nice ambiance.",
      },
    ],
  },
  {
    title: "Cottage Ooty",
    description:
      "Charming hill cottage surrounded by greenery in Ooty. Ideal for a peaceful stay with cool weather and scenic views.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Cottages1.jpg",
    },
    price: 1200,
    location: "Ooty",
    country: "India",
    category: "Cottages",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Very cozy and surrounded by nature.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Peaceful stay with great weather.",
      },
    ],
  },
  {
    title: "Lake Cottage",
    description:
      "Beautiful cottage with breathtaking lake views in Switzerland. A perfect place to relax and enjoy nature in a calm setting.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Cottages2.jpg",
    },
    price: 2000,
    location: "Switzerland",
    country: "Switzerland",
    category: "Cottages",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Lake view was absolutely stunning.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Very relaxing and peaceful stay.",
      },
    ],
  },
  {
    title: "Room Delhi",
    description:
      "Budget-friendly room located in a convenient area of Delhi. Suitable for short stays with basic amenities and easy access to transport.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Rooms1.jpg",
    },
    price: 700,
    location: "Delhi",
    country: "India",
    category: "Rooms",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      { author: defaultOwnerId, rating: 4, comment: "Good value for money." },
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Clean and easy check-in.",
      },
    ],
  },
  {
    title: "Room Dubai",
    description:
      "Luxury room in Dubai with modern interiors and premium comfort. Perfect for travelers looking for a stylish and convenient stay.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Rooms2.jpg",
    },
    price: 2000,
    location: "Dubai",
    country: "UAE",
    category: "Rooms",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Very clean and luxurious feel.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Great facilities and service.",
      },
    ],
  },
  {
    title: "FarmStay Punjab",
    description:
      "Authentic village farm stay experience in Punjab with fresh food and open fields. Ideal for a relaxing and cultural getaway.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/FarmStay1.jpg",
    },
    price: 900,
    location: "Punjab",
    country: "India",
    category: "FarmStays",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Loved the fresh food and calm vibe.",
      },
      { author: defaultOwnerId, rating: 4, comment: "Great rural experience." },
    ],
  },
  {
    title: "Organic FarmStay",
    description:
      "Peaceful farm stay in Nashik with organic food and natural surroundings. Perfect for a refreshing break from city life.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/FarmStay2.png",
    },
    price: 1100,
    location: "Nashik",
    country: "India",
    category: "FarmStays",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Very refreshing and natural stay.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Peaceful and well maintained farm.",
      },
    ],
  },
  {
    title: "Ryokan Kyoto",
    description:
      "Traditional Japanese ryokan offering a cultural and peaceful stay. Experience authentic hospitality with minimalistic interiors.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Ryokans1.jpg",
    },
    price: 3000,
    location: "Kyoto",
    country: "Japan",
    category: "Ryokans",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Authentic and very peaceful stay.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Great cultural experience.",
      },
    ],
  },
  {
    title: "Modern Ryokan",
    description:
      "Modern take on a traditional ryokan with stylish interiors. Offers a comfortable stay while maintaining Japanese aesthetics.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Ryokans2.jpg",
    },
    price: 2800,
    location: "Tokyo",
    country: "Japan",
    category: "Ryokans",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Loved the modern design.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Comfortable and unique stay.",
      },
    ],
  },
  {
    title: "Glamping Rajasthan",
    description:
      "Luxury desert camping experience in Jaisalmer with cultural vibes. Enjoy comfortable tents under the starry sky.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/GlampingSites1.jpg",
    },
    price: 1600,
    location: "Jaisalmer",
    country: "India",
    category: "GlampingSites",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Amazing desert experience.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Comfortable tents and good service.",
      },
    ],
  },
  {
    title: "Forest Glamping",
    description:
      "Luxury camping setup in the forests of Coorg with modern comfort. Ideal for nature lovers who want a unique stay.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/GlampingSites2.jpg",
    },
    price: 1700,
    location: "Coorg",
    country: "India",
    category: "GlampingSites",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Very peaceful forest stay.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Clean and well arranged tents.",
      },
    ],
  },
  {
    title: "TreeHouse Bali",
    description:
      "Jungle treehouse stay in Bali offering scenic and peaceful surroundings. Ideal for a calm and memorable vacation.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/TreeHouse2.jpg",
    },
    price: 2200,
    location: "Bali",
    country: "Indonesia",
    category: "TreeHouses",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      { author: defaultOwnerId, rating: 5, comment: "Loved the jungle vibe." },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Peaceful and relaxing stay.",
      },
    ],
  },
  {
    title: "Forest TreeHouse",
    description:
      "Treehouse located in Himachal forests with scenic views. Perfect for a quiet getaway surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/TreeHouse3.jpg",
    },
    price: 1500,
    location: "Himachal",
    country: "India",
    category: "TreeHouses",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      { author: defaultOwnerId, rating: 5, comment: "Beautiful forest view." },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Very peaceful environment.",
      },
    ],
  },
  {
    title: "GuestRoom Jaipur",
    description:
      "Comfortable guest room in Jaipur with basic amenities and good service. Ideal for budget travelers exploring the city.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/GuestRooms1.jpg",
    },
    price: 800,
    location: "Jaipur",
    country: "India",
    category: "GuestRooms",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Nice and comfortable stay.",
      },
      { author: defaultOwnerId, rating: 5, comment: "Great value for money." },
    ],
  },
  {
    title: "GuestRoom London",
    description:
      "City guest room in London with convenient access to major attractions. A good choice for a comfortable and simple stay.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/GuestRooms2.jpg",
    },
    price: 2000,
    location: "London",
    country: "UK",
    category: "GuestRooms",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Great location and clean room.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Convenient and comfortable stay.",
      },
    ],
  },
  {
    title: "Villa Lonavala",
    description:
      "Spacious private villa in Lonavala with modern amenities. Perfect for weekend getaways with friends and family.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Villa1.jpg",
    },
    price: 2500,
    location: "Lonavala",
    country: "India",
    category: "Villas",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Great villa for group stay.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Nice and spacious property.",
      },
    ],
  },
  {
    title: "Sea Villa Bali",
    description:
      "Luxury villa in Bali with stunning ocean views and private pool. Ideal for a premium and relaxing vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Villa2.jpg",
    },
    price: 3200,
    location: "Bali",
    country: "Indonesia",
    category: "Villas",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Amazing ocean view and pool.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Very relaxing and luxurious.",
      },
    ],
  },
  {
    title: "Hostel Mumbai",
    description:
      "Affordable hostel in Mumbai with clean rooms and friendly vibe. Great for solo travelers and backpackers.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Hostels1.jpg",
    },
    price: 500,
    location: "Mumbai",
    country: "India",
    category: "Hostels",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Budget-friendly and clean.",
      },
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Great place to meet people.",
      },
    ],
  },
  {
    title: "Hostel Bangkok",
    description:
      "Lively backpacker hostel in Bangkok with a social atmosphere. Perfect for meeting new travelers and exploring the city.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Hostels2.jpg",
    },
    price: 600,
    location: "Bangkok",
    country: "Thailand",
    category: "Hostels",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Fun and social environment.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Comfortable and lively stay.",
      },
    ],
  },
  {
    title: "Hostel Berlin",
    description:
      "Trendy hostel in Berlin with modern facilities and vibrant vibe. Ideal for travelers looking for an energetic stay.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Hostels3.jpg",
    },
    price: 700,
    location: "Berlin",
    country: "Germany",
    category: "Hostels",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Clean and stylish hostel.",
      },
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Great vibe and location.",
      },
    ],
  },
  {
    title: "Hotel Dubai",
    description:
      "Luxury hotel in Dubai offering world-class service and premium facilities. Perfect for a comfortable and lavish stay.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dd6q3iewy/image/upload/v1774853206/roamella/Hotels1.jpg",
    },
    price: 3000,
    location: "Dubai",
    country: "UAE",
    category: "Hotels",
    owner: defaultOwnerId,
    amenities: commonAmenities,
    reviews: [
      {
        author: defaultOwnerId,
        rating: 5,
        comment: "Top-class service and rooms.",
      },
      {
        author: defaultOwnerId,
        rating: 4,
        comment: "Very comfortable stay overall.",
      },
    ],
  },
];

module.exports = { data: sampleListings };
