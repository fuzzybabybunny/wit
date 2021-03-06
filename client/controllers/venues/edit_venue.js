EditVenueController = RouteController.extend({
  waitOn: function () {
    var slug_name = this.params.slug_name;
    return Meteor.subscribe('venues', slug_name)
  },

  data: function () {
    var slug_name = this.params.slug_name;
    return Venues.findOne({slug_name: slug_name});
  },

  action: function () {
    this.render();
  }
});
