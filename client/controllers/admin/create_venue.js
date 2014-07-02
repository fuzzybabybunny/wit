CreateVenueController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('areas');
    Meteor.subscribe('venues');
  },

  data: function () {
    return Venues.find();
  },

  action: function () {
    this.render();
  }
});
