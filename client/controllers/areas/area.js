AreaController = RouteController.extend({
  waitOn: function () {
    var slug_area = this.params.slug_area;
    return [
      Meteor.subscribe('areas', slug_area),
      Meteor.subscribe('venues', slug_area)
    ];
  },

  data: function () {
    var slug_area = this.params.slug_area;
    return Areas.findOne({slug_area: slug_area});
  },

  action: function () {
    this.render();
  }
});
