ProfileController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('userVenues');
  },

  data: function () {
    return Meteor.users.findOne();
  },

  action: function () {
    this.render();
  }
});
