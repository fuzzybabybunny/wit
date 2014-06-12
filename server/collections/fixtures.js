if (Venues.find().count() === 0) {

  Venues.insert({
    venue_name: 'The Globe222',
    slug_name: 'the-globe',
    slug_location: 'soho',
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
    slug_location: 'soho',
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
    slug_location: 'soho',
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
    slug_location: 'soho',
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
    slug_location: 'kowloon',
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

}

if (Areas.find().count() === 0) {
  Areas.insert({
    location: 'Soho',
    slug_location: 'soho'
  });

  Areas.insert({
    location: 'Lan Kwai Fong',
    slug_location: 'lan-kwai-fong'
  });

  Areas.insert({
    location: 'Sheung Wan',
    slug_location: 'sheung-wan'
  });

  Areas.insert({
    location: 'Wan Chai',
    slug_location: 'wan-chai'
  });

  Areas.insert({
    location: 'Kowloon',
    slug_location: 'kowloon'
  });
}

if (Invitations.find().count() === 0) {


  var n = 1;
  var x = 25;
  var venueCount = Venues.find().count() -1;
  var randomVenue = 1;
  var venue

  while (n < x){

    randomVenue = Math.round(Math.random()*venueCount);
    console.log('random: ' + randomVenue);
    venue = Venues.findOne({},{skip: randomVenue});

    //venue = Venues.findOne();

    Invitations.insert({
      venue_id: venue._id,
      venue_name: venue.venue_name,
      slug_name: venue.slug_name,
      slug_location: venue.slug_location,
      active: true,
      quota: '100',
      title: {
        brief: 'Free beer',
        full: 'Get a free beer at 2pm today'
      },
      description: 'Enjoy a Peroni on the house at [name]',
      valid: {
        startDate: new Date(),
        endDate: new Date(moment({M: 11})),
        days: {
          mon: true,
          tue: true,
          wed: true,
          thu: true,
          fri: true
        },
        timeFrom: new Date(moment({hour:11})),
        timeTo: new Date(moment({hour:18}))
      },
      updated_at: new Date(),
      created_at: new Date()
    });

    n++;
  }
}