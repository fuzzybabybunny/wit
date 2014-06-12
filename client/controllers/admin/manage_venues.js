ManageVenuesController = RouteController.extend({
  waitOn: function () {
    return [ Meteor.subscribe('venues'), Meteor.subscribe('invitations') ];
  },

  data: function () {
    return Venues.find();
  },

  action: function () {
    this.render();
  }
});
