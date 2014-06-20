EditInviteController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('invitations');
  },

  data: function () {
    return Invitations.findOne({_id: this.params._id});
  },

  action: function () {
    this.render();
  }
});
