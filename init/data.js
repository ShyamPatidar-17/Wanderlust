const sampleListings = [
    
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
    {
      filename:"lisitngImage",
      url:"https://images.unsplash.com/photo-1510009489794-352fba39a0b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    }, price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image:
      {
        filename:"listingImage",
        url:"https://images.unsplash.com/photo-1696556009844-2d7ef3c3e116?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJuJTIwbG9mdCUyMGluJTIwZG93bnRvd258ZW58MHx8MHx8fDA%3D",
        
      }, 
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image:
        {
          filename:"listingImage",
          url:"https://plus.unsplash.com/premium_photo-1668351277191-9df852eb657f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjByZXRyZWF0fGVufDB8fDB8fHww",
        }, price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image:
        {
          filename:"listingImage",
          url:"https://plus.unsplash.com/premium_photo-1677620178517-82b960af41dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGl0bGUlM0ElMjAlMjJIaXN0b3JpYyUyMFZpbGxhJTIwaW4lMjBUdXNjYW55JTIyJTJDfGVufDB8fDB8fHww",
     
        }, price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image:
      {
        filename:"listingImage",
        url:"https://images.unsplash.com/photo-1513517147916-e77dd158b0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGl0bGUlM0ElMjAlMjJTZWNsdWRlZCUyMFRyZWVob3VzZSUyMEdldGF3YXklMjIlMkN8ZW58MHx8MHx8fDA%3D",
     
      }, price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1680883415279-a74f7477fcbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGl0bGUlM0ElMjAlMjJCZWFjaGZyb250JTIwUGFyYWRpc2UlMjIlMkN8ZW58MHx8MHx8fDA%3D",
  
      },    price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1723503370929-e9a34c7e8243?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRpdGxlJTNBJTIwJTIyUnVzdGljJTIwQ2FiaW4lMjBieSUyMHRoZSUyMExha2UlMjIlMkN8ZW58MHx8MHx8fDA%3D",
     
      }, price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1733727456383-67088a57d080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGl0bGUlM0ElMjAlMjJMdXh1cnklMjBQZW50aG91c2UlMjB3aXRoJTIwQ2l0eSUyMFZpZXdzJTIyJTJDfGVufDB8fDB8fHww",
   
      },   price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1661856829137-9c2ff33fe398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGl0bGUlM0ElMjAlMjJTa2klMjBJbiUyRlNraSUyME91dCUyMENoYWxldCUyMiUyQ3xlbnwwfHwwfHx8MA%3D%3D",
     
      }, price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1664302622341-e04fadaa8574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGl0bGUlM0ElMjAlMjJTYWZhcmklMjBMb2RnZSUyMGluJTIwdGhlJTIwU2VyZW5nZXRpJTIyJTJDfGVufDB8fDB8fHww",
    
      },  price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image:
        {
          filename:"listingImage",
          url:"https://plus.unsplash.com/premium_photo-1694475693736-b23a1cd190b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGl0bGUlM0ElMjAlMjJIaXN0b3JpYyUyMENhbmFsJTIwSG91c2UlMjIlMkN8ZW58MHx8MHx8fDA%3D",
    
        },  price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image:
      {
        filename:"listingImage",
        url:"https://images.unsplash.com/photo-1509280951623-4a17506e3eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGl0bGUlM0ElMjAlMjJQcml2YXRlJTIwSXNsYW5kJTIwUmV0cmVhdCUyMiUyQ3xlbnwwfHwwfHx8MA%3D%3D",
  
      },    price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image:
      {
        filename:"listingImage",
        url:"https://images.unsplash.com/photo-1590968802199-d11d978379f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGl0bGUlM0ElMjAlMjJDaGFybWluZyUyMENvdHRhZ2UlMjBpbiUyMHRoZSUyMENvdHN3b2xkcyUyMiUyQ3xlbnwwfHwwfHx8MA%3D%3D",
    
      },  price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1694475423949-9685bb4fa0bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGl0bGUlM0ElMjAlMjJIaXN0b3JpYyUyMEJyb3duc3RvbmUlMjBpbiUyMEJvc3RvbiUyMiUyQ3xlbnwwfHwwfHx8MA%3D%3D",
   
      },   price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1681140029901-1fb2183b3f5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGl0bGUlM0ElMjAlMjJCZWFjaGZyb250JTIwQnVuZ2Fsb3clMjBpbiUyMEJhbGklMjIlMkN8ZW58MHx8MHx8fDA%3D",
     
      }, price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1677343209574-b8044d6cb155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGl0bGUlM0ElMjAlMjJNb3VudGFpbiUyMFZpZXclMjBDYWJpbiUyMGluJTIwQmFuZmYlMjIlMkN8ZW58MHx8MHx8fDA%3D",
      },  price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1706139517445-c9df67670218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwYXBhcnRtZW1udCUyMGluJTIwbWlhbWl8ZW58MHx8MHx8fDA%3D",
     
      }, price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1697730270201-bdfc5b81a675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTIyVHJvcGljYWwlMjBWaWxsYSUyMGluJTIwUGh1a2V0fGVufDB8fDB8fHww",
   
      },   price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1732738245018-c0a68b1bf192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGl0bGUlM0ElMjAlMjJIaXN0b3JpYyUyMENhc3RsZSUyMGluJTIwU2NvdGxhbmQlMjIlMkN8ZW58MHx8MHx8fDA%3D",
   
      },   price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image:
      {
        filename:"listingImage",
        url:"https://images.unsplash.com/photo-1569670380798-ce5cbe51704a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JTIyRGVzZXJ0JTIwT2FzaXMlMjBpbiUyMER1YmFpfGVufDB8fDB8fHww",
     
      }, price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1687800377976-c78ed4ce1c6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXN0aWMlMjBMb2clMjBDYWJpbiUyMGluJTIwTW9udGFuYXxlbnwwfHwwfHx8MA%3D%3D",
     
      }, price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image:
      {
        filename:"listingImage",
        url:"https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2hmcm9udCUyMFZpbGxhJTIwaW4lMjBHcmVlY2V8ZW58MHx8MHx8fDA%3D",
    
      },  price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1713642094237-43525cbebe96?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
      },  price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image:
      {
        filename:"listingImage",
        url:"https://images.unsplash.com/photo-1542024222962-5a9c7649583d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGl0bGUlM0ElMjAlMjJIaXN0b3JpYyUyMENvdHRhZ2UlMjBpbiUyMENoYXJsZXN0b24lMjIlMkN8ZW58MHx8MHx8fDA%3D",
      
      },price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1661962407725-b56c434a9dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9kZXJuJTIwQXBhcnRtZW50JTIwaW4lMjBUb2t5b3xlbnwwfHwwfHx8MA%3D%3D",
      
      },price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1668917804851-931f1d3888ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFrZWZyb250JTIwQ2FiaW4lMjBpbiUyME5ldyUyMEhhbXBzaGlyZXxlbnwwfHwwfHx8MA%3D%3D",
     
      }, price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1675745330148-1f7e5a7674a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTIyTHV4dXJ5JTIwVmlsbGElMjBpbiUyMHRoZSUyME1hbGRpdmVzJTIyfGVufDB8fDB8fHww",
     
      }, price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image:
      {
        filename:"listingImage",
        url:"https://images.unsplash.com/photo-1577075753657-1adde6c4245b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2tpJTIwQ2hhbGV0JTIwaW4lMjBBc3BlbiUyMnxlbnwwfHwwfHx8MA%3D%3D",
        
      }, price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image:
      {
        filename:"listingImage",
        url:"https://plus.unsplash.com/premium_photo-1724701624517-22953482ce56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VjbHVkZWQlMjBCZWFjaCUyMEhvdXNlJTIwaW4lMjBDb3N0YSUyMFJpY2F8ZW58MHx8MHx8fDA%3D",
        
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
    },
  ];
  
  module.exports = { data: sampleListings };