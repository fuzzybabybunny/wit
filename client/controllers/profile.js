ProfileController = RouteController.extend({
  waitOn: function () {
    return [
      Meteor.subscribe('userVenues'),
      Meteor.subscribe('invitations')
      ];
  },

  data: function () {
    return Meteor.users.findOne();
  },

  action: function () {
    this.render();
  }
});
