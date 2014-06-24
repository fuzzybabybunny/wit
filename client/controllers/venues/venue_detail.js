VenueDetailController = RouteController.extend({
  waitOn: function () {
    var slug_name = this.params.slug_name;
    return [
      Meteor.subscribe('venues', slug_name),
      Meteor.subscribe('invitations', { active: true }),
      Meteor.subscribe('followingVenue', {venue_id: Session.get("venue_id")})
    ];
  },

  data: function () {
    var slug_name = this.params.slug_name;
    return Venues.findOne({slug_name: slug_name});
  },

  action: function () {
    this.render();
  }
});
