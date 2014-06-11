AreasIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('areas');
  },

  data: function () {
      return Areas.find();
  },

  action: function () {
    this.render();
  }
});
