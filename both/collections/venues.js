Venues = new Meteor.Collection('venues', {
  schema: new SimpleSchema({
    venue_name: {
      type: String,
      label: "Venue name",
      max: 50
    },
    slug_name: {
      type: String,
      label: "Friendly url name",
      max: 20
    },
    slug_location: {
      type: String,
      label: "Friendly url location",
      max: 20
    },

      "location.address": {
        type: String,
        label: "Street address",
        max: 300
      },

      "location.city": {
        type: String,
        label: "City",
        max: 300
      },
      "location.location": {
        type: String,
        label: "Area",
        max: 300
      },
      "location.country": {
        type: String,
        label: "Country",
        max: 300
      },

      "contact.phone": {
        type: String,
        label: "Phone",
        max: 300
      },
      "contact.url": {
        type: String,
        label: "Url",
        max: 300
      },
      "contact.email": {
        type: String,
        label: "Email",
        max: 300
      },

      "contact.manager": {
        type: String,
        label: "Manager's name",
        max: 300
      },

      "profile.description": {
        type: String,
        label: "Description",
        max: 300,
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

      "stats.followers": {
        type: String,
        label: "Followers",
        max: 300
      },

    created_at: {
      type: Date,
      label: 'Created at'
    }
  })
});

/*
 * Add query methods like this:
 *  Venues.findPublic = function () {
 *    return Venues.find({is_public: true});
 *  }

 */
