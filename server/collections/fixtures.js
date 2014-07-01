if (Venues.find().count() === 0) {

  Venues.insert({
    venue_name: "Mano",
    venue_type: "cafe",
    slug_area: "central",
    slug_name: "mano",
    contact: {
        manager: "Keith",
        phone: "+852 2399 0737",
        url: "http://www.manohk.com"
    },
    images: [
        {
            filename: "walkinto.png",
            mimetype: "image/png",
            size: "39372",
            isWriteable: true,
            url: "https://www.filepicker.io/api/file/3lRYjnW7R9iZgJOMYlxu"
        }
    ],
    images_logo: "https://www.filepicker.io/api/file/3lRYjnW7R9iZgJOMYlxu",
    items: [
        {
            item_name: "Double espresso",
            price: 33,
            currency: "HKD",
            unit: "Cup",
            comments: "Very smooth"
        }
    ],
    location: {
        address: "139 Queen's Road",
        area: "Hong Kong Island",
        building: "The L. Place",
        country: "Hong Kong",
        floor: "Ground Floor",
        formatted_address: "G/F, The L. Place\n139 Queen's Road Central, \nHong Kong",
        quick_directions: "Take exit A from Hong Kong MTR",
        suburb: "Central",
        subway: "Hong Kong",
        venue_area: "Central",
        latlng: [22.279991,114.158798]
    },
    open: [
        {
            days: "Everyday",
            time_open: "8:00am",
            time_close: "11:00pm"
        }
    ],
    profile: {
        description: "Cafe and restaurant that serves great coffee and food. Comfortable seats in a relaxed atmosphere",
        does_takeaway: false,
        focus: "Coffee",
        has_bar: false,
        has_food: true,
        has_free_wifi: true,
        is_chain: false,
        is_halal: false,
        is_kosher: false,
        is_romantic: false,
        is_vegetarian: false,
        large_groups: true,
        owner_description: "Freshly crafted food designed for taste. ",
        private_room: false,
        review: "Smooth espressos, great drip single blend coffee and fantastic modern breakfast. Comfortable seats and fast wifi. Only 2 powerpoints in the venue, so hustle hard for the those tables if you are looking to plugin for some time. Avoid Thursday mornings as Mano hosts a business networking event.",
        size: "medium",
        specialty: "Double espresso",
        style: "General",
        tag: "Great coffee and food",
        takes_reservations: true
    },
    stats: {
        followers: 0
    },
    updated_at: new Date,
    created_at: new Date
  });

  Venues.insert({
    venue_name: "The Globe",
    venue_type: "bar",
    slug_area: "soho",
    slug_name: "thegloble",
    contact: {
        manager: "Keith",
        phone: "+852 2399 0737",
        url: "http://www.manohk.com"
    },
    images: [
        {
            filename: "walkinto.png",
            mimetype: "image/png",
            size: "39372",
            isWriteable: true,
            url: "https://www.filepicker.io/api/file/3lRYjnW7R9iZgJOMYlxu"
        }
    ],
    images_logo: "https://www.filepicker.io/api/file/3lRYjnW7R9iZgJOMYlxu",
    items: [
        {
            item_name: "Double espresso",
            price: 33,
            currency: "HKD",
            unit: "Cup",
            comments: "Very smooth"
        }
    ],
    location: {
        address: "139 Queen's Road",
        area: "Hong Kong Island",
        building: "The L. Place",
        country: "Hong Kong",
        floor: "Ground Floor",
        formatted_address: "G/F, The L. Place\n139 Queen's Road Central, \nHong Kong",
        quick_directions: "Take exit A from Hong Kong MTR",
        suburb: "Central",
        subway: "Hong Kong",
        venue_area: "Soho",
        latlng: [22.279991,114.158798]
    },
    open: [
        {
            days: "Everyday",
            time_open: "8:00am",
            time_close: "11:00pm"
        }
    ],
    profile: {
        description: "Cafe and restaurant that serves great coffee and food. Comfortable seats in a relaxed atmosphere",
        does_takeaway: false,
        focus: "Coffee",
        has_bar: false,
        has_food: true,
        has_free_wifi: true,
        is_chain: false,
        is_halal: false,
        is_kosher: false,
        is_romantic: false,
        is_vegetarian: false,
        large_groups: true,
        owner_description: "Freshly crafted food designed for taste. ",
        private_room: false,
        review: "Smooth espressos, great drip single blend coffee and fantastic modern breakfast. Comfortable seats and fast wifi. Only 2 powerpoints in the venue, so hustle hard for the those tables if you are looking to plugin for some time. Avoid Thursday mornings as Mano hosts a business networking event.",
        size: "medium",
        specialty: "Double espresso",
        style: "General",
        tag: "Great coffee and food",
        takes_reservations: true
    },
    stats: {
        followers: 0
    },
    updated_at: new Date,
    created_at: new Date
  });

  Venues.insert({
    venue_name: "La Piola",
    venue_type: "restaurant",
    slug_area: "soho",
    slug_name: "la-piola",
    contact: {
        manager: "Keith",
        phone: "+852 2399 0737",
        url: "http://www.manohk.com"
    },
    images: [
        {
            filename: "walkinto.png",
            mimetype: "image/png",
            size: "39372",
            isWriteable: true,
            url: "https://www.filepicker.io/api/file/3lRYjnW7R9iZgJOMYlxu"
        }
    ],
    main_image: {
        url: "https://www.filepicker.io/api/file/mBLsXU0RHal9rs2P9Sjg",
        convert: "convert?crop=0,200,900,350"
    },
    images_logo: "https://www.filepicker.io/api/file/3lRYjnW7R9iZgJOMYlxu",
    items: [
        {
            item_name: "Double espresso",
            price: 33,
            currency: "HKD",
            unit: "Cup",
            comments: "Very smooth"
        }
    ],
    location: {
        address: "139 Queen's Road",
        area: "Hong Kong Island",
        building: "The L. Place",
        country: "Hong Kong",
        floor: "Ground Floor",
        formatted_address: "G/F, The L. Place\n139 Queen's Road Central, \nHong Kong",
        quick_directions: "Take exit A from Hong Kong MTR",
        suburb: "Central",
        subway: "Hong Kong",
        venue_area: "Soho",
        latlng: [22.282689,114.128329]
    },
    open: [
        {
            days: "Everyday",
            time_open: "8:00am",
            time_close: "11:00pm"
        }
    ],
    profile: {
        description: "Cafe and restaurant that serves great coffee and food. Comfortable seats in a relaxed atmosphere",
        does_takeaway: false,
        focus: "Coffee",
        has_bar: false,
        has_food: true,
        has_free_wifi: true,
        is_chain: false,
        is_halal: false,
        is_kosher: false,
        is_romantic: false,
        is_vegetarian: false,
        large_groups: true,
        owner_description: "Freshly crafted food designed for taste. ",
        private_room: false,
        review: "Smooth espressos, great drip single blend coffee and fantastic modern breakfast. Comfortable seats and fast wifi. Only 2 powerpoints in the venue, so hustle hard for the those tables if you are looking to plugin for some time. Avoid Thursday mornings as Mano hosts a business networking event.",
        size: "medium",
        specialty: "Double espresso",
        style: "General",
        tag: "Great coffee and food",
        takes_reservations: true
    },
    stats: {
        followers: 0
    },
    updated_at: new Date,
    created_at: new Date
  });


}





if (Areas.find().count() === 0) {
  Areas.insert({
    location: 'Soho',
    slug_area: 'soho',
    image: '/public/images/areas/Soho.jpg'
  });

  Areas.insert({
    location: 'Central',
    slug_area: 'central',
    image: '/public/images/areas/Central.jpg'
  });

  Areas.insert({
    location: 'Lan Kwai Fong',
    slug_area: 'lan-kwai-fong',
    image: '/public/images/areas/Lan_Kwai_Fong.jpg'
  });

  Areas.insert({
    location: 'Sheung Wan',
    slug_area: 'sheung-wan',
    image: '/public/images/areas/Sheung_Wan.jpg'
  });

  Areas.insert({
    location: 'Wan Chai',
    slug_area: 'wan-chai',
    image: '/public/images/areas/Wan_Chai.jpg'
  });

  Areas.insert({
    location: 'Kowloon',
    slug_area: 'kowloon',
    image: '/public/images/areas/Kowloon.jpg'
  });
}

if (Invitations.find().count() === 0) {
  var n = 1;
  var x = 15;
  var venueCount = Venues.find().count() -1;
  var randomVenue = 1;
  var venue;
  var randomEndTime;
  var randomEndTime;

  while (n < x){

    randomVenue = Math.round(Math.random()*2);
    console.log('random: ' + randomVenue);
    venue = Venues.findOne({},{skip: randomVenue});
    randomStartTime = Math.round(Math.random()*24);
    randomEndTime = Math.min(23.59,randomStartTime+4);
    //venue = Venues.findOne();

    Invitations.insert({
      venue_id: venue._id,
      venue_name: venue.venue_name,
      slug_name: venue.slug_name,
      slug_area: venue.slug_area,
      venue_area: venue.location.venue_area,
      active: true,
      quota: '-1',
      title: {
        brief: 'Free beer',
        full: 'Get a free beer at 2pm today'
      },
      description: 'Enjoy a Peroni on the house at [name]',
      invite_type: 'public',
      category: "drink",
      valid: {
        startDate: new Date(moment({H: 0, m: 1})),
        endDate: new Date(moment({M: 11, H: 23, m: 59})),
        days: ["1","2","3","4","5","6"],
        timeFrom: randomStartTime,
        timeTo: randomEndTime
      },
      views: 0,
      likes: 0,
      updated_at: new Date(),
      created_at: new Date()
    });

    n++;
  }
}


/**
    venue_name: 'The Globe222',
    slug_name: 'the-globe',
    slug_area: 'soho',
    active: true,
    location: {
      address: '1 Soho Street',
      city: 'Hong Kong Island',
      location: 'Soho',
      country: 'Hong Kong'
    },
    contact: {
      phone: '(555) 555-5555',
      url: 'http://www.theglobe.com',
      email: 'bar@theglobe.com',
      manager: 'John Doe'
    },
    profile: {
      description: 'The largest selection of craft beers in HK.',
      has_food: true,
      has_bar: true,
      mj_time: new Date
    },
    stats: {
      followers: 0
    },
    updated_at: new Date,
    created_at: new Date
  });

  Venues.insert({
    venue_name: 'The Hong Kong Brewhouse',
    slug_name: 'hk-brewhouse',
    slug_area: 'soho',
    active: true,
    location: {
      address: '1 Soho Street',
      city: 'Hong Kong Island',
      location: 'Soho',
      country: 'Hong Kong'
    },
    contact: {
      phone: '(555) 555-5555',
      url: 'http://www.theglobe.com',
      email: 'bar@theglobe.com',
      manager: 'John Doe'
    },
    profile: {
      description: 'The largest selection of craft beers in HK.',
      has_food: true,
      has_bar: true,
      mj_time: new Date
    },
    stats: {
      followers: 0
    },
    updated_at: new Date,
    created_at: new Date
  });

  Venues.insert({
    venue_name: 'La Piola',
    slug_name: 'la-piola',
    slug_area: 'soho',
    active: true,
    location: {
      address: '1 Soho Street',
      city: 'Hong Kong Island',
      location: 'Soho',
      country: 'Hong Kong'
    },
    contact: {
      phone: '(555) 555-5555',
      url: 'http://www.theglobe.com',
      email: 'bar@theglobe.com',
      manager: 'John Doe'
    },
    profile: {
      description: 'The largest selection of craft beers in HK.',
      has_food: true,
      has_bar: true,
      mj_time: new Date
    },
    stats: {
      followers: 0
    },
    updated_at: new Date,
    created_at: new Date
  });

  Venues.insert({
    venue_name: 'Posto Publico',
    slug_name: 'posto-publico',
    slug_area: 'soho',
    active: true,
    location: {
      address: '1 Soho Street',
      city: 'Hong Kong Island',
      location: 'Soho',
      country: 'Hong Kong'
    },
    contact: {
      phone: '(555) 555-5555',
      url: 'http://www.theglobe.com',
      email: 'bar@theglobe.com',
      manager: 'John Doe'
    },
    profile: {
      description: 'The largest selection of craft beers in HK.',
      has_food: true,
      has_bar: true,
      mj_time: new Date
    },
    stats: {
      followers: 0
    },
    updated_at: new Date,
    created_at: new Date
  });

  Venues.insert({
    venue_name: 'Vissa',
    slug_name: 'vissa',
    slug_area: 'kowloon',
    active: true,
    location: {
      address: '1 Soho Street',
      city: 'Tai Kok Tsui',
      location: 'Kowloon',
      country: 'Hong Kong'
    },
    contact: {
      phone: '(555) 555-5555',
      url: 'http://www.theglobe.com',
      email: 'bar@theglobe.com',
      manager: 'John Doe'
    },
    profile: {
      description: 'The largest selection of craft beers in HK.',
      has_food: true,
      has_bar: true,
      mj_time: new Date
    },
    stats: {
      followers: 0
    },
    updated_at: new Date,
    created_at: new Date
  });
  **/
