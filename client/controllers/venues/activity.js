ActivityController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('invitations');
  },

  data: function () {

    return Invitations.find({},{sort: {updated_at:-1}});

  },

  action: function () {
    this.render();
  }
});
