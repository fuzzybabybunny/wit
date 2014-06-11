Areas = new Meteor.Collection('areas', {
  schema: new SimpleSchema ({
    location: {
      type: String,
      label: "Area location",
      max: 300
    },
    slug_location: {
      type: String,
      label: "Friendly url for location",
      max: 50
    }
  })
});

/*
 * Add query methods like this:
 *  Areas.findPublic = function () {
 *    return Areas.find({is_public: true});
 *  }
 */
