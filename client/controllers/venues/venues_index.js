VenuesIndexController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('venues');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
