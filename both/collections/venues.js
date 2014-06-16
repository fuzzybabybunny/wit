Venues = new Meteor.Collection('venues', {
  schema: new SimpleSchema({
    venue_name: {
      type: String,
      label: "Venue name",
      max: 50,
        optional: true
    },
    slug_name: {
      type: String,
      label: "Friendly name for URL",
      max: 20,
        optional: true
    },
    slug_location: {
      type: String,
      label: "Friendly location for URL",
      max: 20,
        optional: true
    },
    venue_type: {
      type: String,
      label: 'Venue type',
      max: 20,
      allowedValues: ['bar', 'restaurant', 'cafe', 'shop', 'nightclub', 'hotel'],
        optional: true
    },

//*********************
//
//    LOCATION
//
//*********************

      "location.formatted_address": {
        type: String,
        label: "Formatted Address (i.e. G/F, The L Place, 139 Queen's Road Central, Hong Kong",
        max: 200,
        optional: true
      },
      "location.floor": {
        type: String,
        label: "Floor of the venue",
        max: 100,
        optional: true
      },
      "location.building": {
        type: String,
        label: "Building name",
        max: 100,
        optional: true
      },
      "location.address": {
        type: String,
        label: "Street number and address",
        max: 100,
        optional: true
      },
      "location.suburb": {
        type: String,
        label: "Suburb",
        max: 50,
        optional: true
      },
      "location.area": {
        type: String,
        label: "Broader area or district (i.e. Hong Kong Island, Kowloon)",
        max: 50,
        optional: true
      },
      "location.country": {
        type: String,
        label: "Country",
        max: 50,
        optional: true,
        allowedValues: ['Hong Kong', 'Macau', 'Shenzen', 'Singapore', 'Manila', 'Hanoi', 'Bangkok']
      },
      "location.venue_area": {
        type: String,
        label: "Informal area grouping (i.e. Soho, Kowloon). Note: should be consistent with slug location",
        max: 50,
        optional: true
      },
      "location.subway": {
        type: String,
        label: "Closet subway exit",
        max: 50,
        optional: true,
      },
      "location.quick_directions": {
          type: String,
          label: "Quick directions to get there fast",
          max: 400,
          optional: true
      },

//*********************
//
//    CONTACT DETAILS
//
//*********************

      "contact.phone": {
        type: String,
        label: "Phone (including country code)",
        max: 20,
        optional: true
      },
      "contact.url": {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        label: "Venue Url (include http://)",
        max: 50,
        optional: true
      },
      "contact.email": {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Venue Email",
        max: 50,
        optional: true
      },

      "contact.manager": {
        type: String,
        label: "Manager's name",
        max: 50,
        optional: true
      },

//*********************
//
//    PROFILE
//
//*********************

      "profile.tag": {
        type: String,
        label: "Brief headline description",
        max: 100,
        optional: true
      },
      "profile.description": {
        type: String,
        label: "Fullsome description",
        max: 500,
        optional: true
      },
      "profile.owner_description":{
        type: String,
        label: "Owner description",
        max: 500,
        optional: true
      },
      "profile.review":{
        type: String,
        label: "Walkinto review and opinion",
        max: 500,
        optional: true
      },
      "profile.style":{
        type: String,
        label: "Style of the menu / theme",
        allowedValues: ["General", "English", "French", "American", "Italian", "Chinese", "Mediterranean", "Japanese", "Korean", "Thai", "German", "Russian", "Mexican", "Spanish", "Argentinian", "Portugese", "Vietnamese", "Belgian", "Peruvian"],
        optional: true
      },
      "profile.focus":{
        type: String,
        label: "Specialty of venue",
        allowedValues: ["None", "Cocktails", "Craft beers", "Steakhouse", "Pub", "Winebar", "Pasta", "Pizza", "Burgers", "Sushi", "Coffee"],
        optional: true
      },
      "profile.specialty": {
        type: String,
        label: "House specialities of the venue / recommendations of items to try",
        max: 200,
        optional: true
      },
      "profile.has_food": {
        type: Boolean,
        label: "Serves food?",
        optional: true
      },
      "profile.has_bar": {
        type: Boolean,
        label: "Has a bar?",
        optional: true
      },
      "profile.has_free_wifi":{
        type: Boolean,
        label: "Has free wifi?",
        optional: true
      },
      "profile.is_chain": {
        type: Boolean,
        label: "Is this a chain venue?",
        optional: true
      },
      "profile.is_romantic": {
        type: Boolean,
        label: "Romantic venue?",
        optional: true
      },
      "profile.private_room": {
        type: Boolean,
        label: "Private rooms available?",
        optional: true
      },
      "profile.private_room": {
        type: Boolean,
        label: "Michelin Star?",
        optional: true
      },
      "profile.does_takeaway": {
        type: Boolean,
        label: "takeaway available?",
        optional: true
      },
      "profile.large_groups": {
        type: Boolean,
        label: "can host large groups (+15pax)?",
        optional: true
      },
      "profile.is_vegetarian": {
        type: Boolean,
        label: "is Vegetarian?",
        optional: true
      },
      "profile.is_kosher": {
        type: Boolean,
        label: "is Kosher?",
        optional: true
      },
      "profile.is_halal": {
        type: Boolean,
        label: "is Halal?",
        optional: true
      },
      "profile.takes_reservations": {
        type: Boolean,
        label: "Does this venue take reservations?",
        optional: true
      },
      "profile.owner": {
        type: String,
        label: "Owner or Dining Group (i.e. Dining Concepts)",
        max: 100,
        optional: true
      },
      "profile.size": {
        type: String,
        label: "Size of the venue",
        allowedValues: ['small', 'medium', 'large']
      },

      "stats.followers": {
        type: Number,
        label: "Followers",
        max: 6,
        defaultValue: 0,
        optional: true
      },

//*********************
//
//    PHOTOS
//
//*********************

      "images.$.filename": {
          type: String,
        optional: true
      },

      "images.$.mimetype":{
        type: String,
        optional: true
      },
      "images.$.size":{
        type: String,
        optional: true
      },
      "images.$.isWriteable":{
        type: Boolean,
        optional: true
      },
      "images.$.url":{
        type: String,
        optional: true
      },
      images_head: {
        type: String,
        label: "Main image: enter url from Images",
        optional: true
      },
      images_logo: {
        type: String,
        label: "Venue logo image: enter url from Images",
        optional: true
      },

//*********************
//
//    ITEMS
//
//*********************

    "items.$.item_name": {
      type: String,
      label: "Description of item for sale, include brand if possible: Hoegaarden Beer etc",
      max: 100,
      optional: true
    },
    "items.$.price": {
      type: Number,
      label: "Price of the item (numbers only 64)",
      optional: true
    },
    "items.$.currency": {
      type: String,
      label: "Currency: HKD, USD, AUD, CNY",
      allowedValues: ["HKD", "USD", "CNY", "PHP", "AUD"],
      max: 20,
      optional: true
    },
    "items.$.unit": {
      type: String,
      label: "Unit being sold: Pint, Entree, Main Meal",
      allowedValues: ["Pint", "Glass", "Shot", "Starter", "Main Meal", "Unit", "Cup"],
      max: 200,
      optional: true
    },
    "items.$.comments": {
      type: String,
      label: "Comments on the item",
      max: 300,
      optional: true
    },

//*********************
//
//    OPEN
//
//*********************

    "open.$.days": {
      type: String,
      label: "Select days that the venue is open",
      allowedValues: ['Everyday', 'Weekdays', 'Weekends', 'Saturday', 'Sunday'],
      max: 20,
      optional: true
    },
    "open.$.time_open": {
      type: String,
      label: "Time open: format as 8:00am",
      optional: true
    },
    "open.$.time_close": {
      type: String,
      label: "Time close: format as 11:00pm",
      max: 20,
      optional: true
    },
    "open.$.comments": {
      type: String,
      label: "Comments about the opening hours or days",
      max: 200,
      optional: true
    },
    updated_at: {
      type: Date,
      label: 'Updated at',
      autoValue: function(){
          return new Date(); //moment().toString();
      }
    },
    created_at: {
      type: Date,
      label: 'Created at',
      autoValue: function(){
        if(this.isInsert){
          return new Date();
        }
      },
    }

  })
});

Venues.simpleSchema().messages({
  'regEx contact.email': "[label] is not a valid e-mail address",
  'regEx contact.url': "[label] is not a valid URL",
});


/*
 * Add query methods like this:
 *  Venues.findPublic = function () {
 *    return Venues.find({is_public: true});
 *  }

 */
