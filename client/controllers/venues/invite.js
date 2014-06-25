InviteController = RouteController.extend({
  waitOn: function () {
    return [
      Meteor.subscribe('invitations'),
      Meteor.subscribe('venues')
    ];
  },

  data: function () {
    var inviteId = this.params._id
    console.log('params: ' + inviteId);
    return Invitations.findOne({_id: inviteId});
  },

  action: function () {
    this.render();
  }
});
