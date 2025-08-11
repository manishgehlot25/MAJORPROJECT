const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901041/wanderlust_DEV/tbfsq6xapnwjy6fsdsoe.jpg',
            filename: 'wanderlust_DEV/tbfsq6xapnwjy6fsdsoe'
        },
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901309/wanderlust_DEV/rjh4wo2mq7ueoz6fmi8x.jpg',
            filename: 'wanderlust_DEV/rjh4wo2mq7ueoz6fmi8x'
        },
    price: 1200,
    location: "New York City",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901329/wanderlust_DEV/f2ymb9h0t5tfyjx3eiwm.jpg',
            filename: 'wanderlust_DEV/f2ymb9h0t5tfyjx3eiwm'
        },
    price: 1000,
    location: "Aspen, United States",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901353/wanderlust_DEV/ntaoo8epqjaser5skytf.avif',
            filename: 'wanderlust_DEV/ntaoo8epqjaser5skytf'
        },
    price: 2500,
    location: "Florence",
    country: "Italy",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901378/wanderlust_DEV/zj2kaegozsxyimqszvds.avif',
            filename: 'wanderlust_DEV/zj2kaegozsxyimqszvds'
        },
    price: 800,
    location: "Portland",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
     image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901399/wanderlust_DEV/wzam4gsmcvu9rlauc6xf.avif',
            filename: 'wanderlust_DEV/wzam4gsmcvu9rlauc6xf'
        },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
     image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901426/wanderlust_DEV/sutgzhjeeswhfkhbiv0p.avif',
            filename: 'wanderlust_DEV/sutgzhjeeswhfkhbiv0p'
        },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901448/wanderlust_DEV/rwcwau9ac0i9xvmthgru.avif',
            filename: 'wanderlust_DEV/rwcwau9ac0i9xvmthgru'
        },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
     image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901469/wanderlust_DEV/scbhnl5lu6tqy7klft2g.avif',
            filename: 'wanderlust_DEV/scbhnl5lu6tqy7klft2g'
        },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
   image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901499/wanderlust_DEV/gtu2p6139oelqnlkyrnj.avif',
            filename: 'wanderlust_DEV/gtu2p6139oelqnlkyrnj'
        },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901532/wanderlust_DEV/psnz3ez0cmol1fjzk5j2.avif',
            filename: 'wanderlust_DEV/psnz3ez0cmol1fjzk5j2'
        },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901552/wanderlust_DEV/mt1r2vjqdqsxqoppmcr3.avif',
            filename: 'wanderlust_DEV/mt1r2vjqdqsxqoppmcr3'
        },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
     image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901571/wanderlust_DEV/ig1g0a2ht4hru3qbso8k.avif',
            filename: 'wanderlust_DEV/ig1g0a2ht4hru3qbso8k'
        },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901588/wanderlust_DEV/ujerzhbvsmfcinas13hk.avif',
            filename: 'wanderlust_DEV/ujerzhbvsmfcinas13hk'
        },
    price: 2200,
    location: "Boston",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
   image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901605/wanderlust_DEV/ilhmpwazpmz7brgs1rut.avif',
            filename: 'wanderlust_DEV/ilhmpwazpmz7brgs1rut'
        },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901626/wanderlust_DEV/iwzpauohuukjgenrzicc.avif',
            filename: 'wanderlust_DEV/iwzpauohuukjgenrzicc'
        },
    price: 1500,
    location: "Banff",
    country: "Canada",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901649/wanderlust_DEV/rnic6kx1njhlribw1tog.avif',
            filename: 'wanderlust_DEV/rnic6kx1njhlribw1tog'
        },
    price: 1600,
    location: "Miami",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
     image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901671/wanderlust_DEV/dvfq1kprjmbeqfg0kqem.avif',
            filename: 'wanderlust_DEV/dvfq1kprjmbeqfg0kqem'
        },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901695/wanderlust_DEV/x0p9irc96ew4tokcsxwi.avif',
            filename: 'wanderlust_DEV/x0p9irc96ew4tokcsxwi'
        },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
   image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901721/wanderlust_DEV/vyjtnaz5hwlglntcg4yp.avif',
            filename: 'wanderlust_DEV/vyjtnaz5hwlglntcg4yp'
        },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
   image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901743/wanderlust_DEV/gxshmjby2lyu9qpmaa9g.avif',
            filename: 'wanderlust_DEV/gxshmjby2lyu9qpmaa9g'
        },
    price: 1100,
    location: "Montana",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
     image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901763/wanderlust_DEV/blyjn6tznhxrscc6cvkd.avif',
            filename: 'wanderlust_DEV/blyjn6tznhxrscc6cvkd'
        },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901786/wanderlust_DEV/pvwcznmnhsivrtsr8duk.avif',
            filename: 'wanderlust_DEV/pvwcznmnhsivrtsr8duk'
        },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901809/wanderlust_DEV/nzlpkr0bvzglu4evakmt.avif',
            filename: 'wanderlust_DEV/nzlpkr0bvzglu4evakmt'
        },
    price: 1600,
    location: "Charleston",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
   image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901827/wanderlust_DEV/emdfx8odiyyz6vrtb5t8.avif',
            filename: 'wanderlust_DEV/emdfx8odiyyz6vrtb5t8'
        },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901851/wanderlust_DEV/gyqfoi8k8bizph00kh4n.avif',
            filename: 'wanderlust_DEV/gyqfoi8k8bizph00kh4n'
        },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901869/wanderlust_DEV/malkezswxjjrpaxyejma.avif',
            filename: 'wanderlust_DEV/malkezswxjjrpaxyejma'
        },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901895/wanderlust_DEV/cy6xcgdoktjzpn1eaxjd.avif',
            filename: 'wanderlust_DEV/cy6xcgdoktjzpn1eaxjd'
        },
    price: 4000,
    location: "Aspen, United States",
    country: "United States",
    owner: '6894f029feaf6cce3e5e4292',
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
     image: {
            url: 'https://res.cloudinary.com/dcsdnjczf/image/upload/v1754901917/wanderlust_DEV/ve5diq0x6mdrn4wbraqj.avif',
            filename: 'wanderlust_DEV/ve5diq0x6mdrn4wbraqj'
        },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    owner: '6894f029feaf6cce3e5e4292',
  },
];

export const data = sampleListings;