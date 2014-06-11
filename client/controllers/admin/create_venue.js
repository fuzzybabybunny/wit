CreateVenueController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('venues');
  },

  data: function () {
    return Venues.find();
  },

  action: function () {
    this.render();
  }
});
