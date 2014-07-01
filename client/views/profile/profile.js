/*****************************************************************************/
/* Profile: Event Handlers and Helpers */
/*****************************************************************************/
Template.Profile.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Profile.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   user: function(){
    var user = Meteor.users.findOne();
    Session.set('username', user.username);
    //console.log(user.emails);
    return user;
   },
   saves: function(){
    var saves = Meteor.users.find({
      _id: Meteor.userId()
    },{
      fields: { 'profile.saved': 1 },
      sort: { added_at: -1 }
    }).fetch();

    saves =
      _.flatten(
        _.pluck(
          _.pluck(saves, 'profile'),
          "saved"),
        true
      );

      _.each(saves, function(element, index, list){
        var inviteStatus = getInviteStatus(element.invite_id);
        _.extend(saves[index], {status: inviteStatus});
      });

      saves = _.sortBy(saves, function(invite){
        return parseInt(invite["status"]["endIndex"]);
      });

    return saves;
   },
   userFollowing: function(){
      var inviteCount;
      var invite;
      var following = Follows.find({
          user_id: Meteor.userId()
        }, {
          transform: function(doc){
            var inviteCount = getVenueInviteCount(doc.venue_id);

            return _.extend(doc, {
              'active_invites': inviteCount["active"],
              'soon_invites': inviteCount["soon"],
              'expired_invites': inviteCount["expired"],
              'total_invites': inviteCount["total"],
            });
          }
        }).fetch();

      console.log(following);
      following = (_.size(following) > 0)? following : false;
      //console.log('venue_id: ' + following);

      return following;
   }
});

var findSavedInvites = function(){

};

/*****************************************************************************/
/* Profile: Lifecycle Hooks */
/*****************************************************************************/
Template.Profile.created = function () {
};

Template.Profile.rendered = function () {
};

Template.Profile.destroyed = function () {
};
