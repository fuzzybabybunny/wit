Venues = new Meteor.Collection('venues', {
  schema: new SimpleSchema({
    venue_name: {
      type: String,
      label: "Venue name",
      max: 50
    },
    slug_name: {
      type: String,
      label: "Friendly name for URL",
      max: 20
    },
    slug_location: {
      type: String,
      label: "Friendly location for URL",
      max: 20
    },
    venue_type: {
      type: String,
      label: 'Venue type',
      max: 20,
      allowedValues: ['bar', 'restaurant', 'shop', 'cafe', 'nightclub', 'hotel']
    },
      "location.address": {
        type: String,
        label: "Street address",
        max: 100,
        optional: true
      },

      "location.city": {
        type: String,
        label: "City",
        max: 50,
        optional: true
      },
      "location.location": {
        type: String,
        label: "Area",
        max: 50
      },
      "location.country": {
        type: String,
        label: "Country",
        max: 50,
        optional: true,
        allowedValues: ['Hong Kong', 'Macau', 'Shenzen', 'Singapore', 'Manila', 'Hanoi', 'Bangkok']
      },

      "contact.phone": {
        type: String,
        label: "Phone",
        max: 20,
        optional: true
      },
      "contact.url": {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        label: "Url",
        max: 50,
        optional: true
      },
      "contact.email": {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Email",
        max: 50,
        optional: true
      },

      "contact.manager": {
        type: String,
        label: "Manager's name",
        max: 50,
        optional: true
      },

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
        type: Number,
        label: "Followers",
        max: 6,
        defaultValue: 0
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
