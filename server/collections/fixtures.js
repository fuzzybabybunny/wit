if (Venues.find().count() === 0) {

  Venues.insert({
    venue_name: 'The Globe',
    slug_name: 'the-globe',
    slug_location: 'soho',
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
      has_bar: true
    },
    stats: {
      followers: 0
    },
    created_at: new Date
  });

  Venues.insert({
    venue_name: 'The Hong Kong Brewhouse',
    slug_name: 'hk-brewhouse',
    slug_location: 'soho',
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
      has_bar: true
    },
    stats: {
      followers: 0
    },
    created_at: new Date
  });

  Venues.insert({
    venue_name: 'La Piola',
    slug_name: 'la-piola',
    slug_location: 'soho',
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
      has_bar: true
    },
    stats: {
      followers: 0
    },
    created_at: new Date
  });

  Venues.insert({
    venue_name: 'Posto Publico',
    slug_name: 'posto-publico',
    slug_location: 'soho',
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
      has_bar: true
    },
    stats: {
      followers: 0
    },
    created_at: new Date
  });

  Venues.insert({
    venue_name: 'Vissa',
    slug_name: 'vissa',
    slug_location: 'kowloon',
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
      has_bar: true
    },
    stats: {
      followers: 0
    },
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