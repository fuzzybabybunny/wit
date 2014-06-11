AreaController = RouteController.extend({
  waitOn: function () {
    var slug_location = this.params.slug_location;
    return [
      Meteor.subscribe('areas', slug_location),
      Meteor.subscribe('venues', slug_location)
    ];
  },

  data: function () {
    var slug_location = this.params.slug_location;
    return Areas.findOne({slug_location: slug_location});
  },

  action: function () {
    this.render();
  }
});
