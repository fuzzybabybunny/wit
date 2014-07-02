Template.InviteSmall.events({
  'click .stash': function(){
    Invitations.update({
      _id: this._id
    },{
      $inc: {stash: 1}
    });

    Meteor.users.update({
      _id: Meteor.userId()
    },{
      $push: {
        'profile.stash':
          {
            invite_id: this._id,
            invite_name: this.title.brief,
            venue_name: this.venue_name,
            slug_name: this.slug_name,
            slug_area: this.slug_area,
            added_at: new Date()
          }
        }
    });

  }
});

Template.InviteMedium.helpers({
    findStash: function(){
    return findStash = Meteor.users.findOne({
      _id: Meteor.userId(),
      'profile.stash.invite_id': this._id
    });
  }
});