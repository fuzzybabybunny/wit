HomeController = RouteController.extend({
  layoutTemplate: 'NoBreadcrumbs',

  waitOn: function () {
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
