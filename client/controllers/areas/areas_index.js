AreasIndexController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('areas');
    Meteor.subscribe('venues');
  },

  data: function () {
      return Areas.find();
  },

  action: function () {
    this.render();
  }
});
