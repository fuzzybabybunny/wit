ViewInvitationsController = RouteController.extend({
  waitOn: function () {
    return [
      Meteor.subscribe('invitations', this.params._id),
      Meteor.subscribe('venues', this.params._id)
      ];
  },

  data: function () {
    //Session.set('inviteCount', 0);

    return Venues.findOne({
      _id: this.params._id
    });
  },

  action: function () {
    this.render();
  }
});


