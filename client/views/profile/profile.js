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
    console.log(user.emails);
    return user;
   },
   userFollowing: function(){
      var following = Follows.find({user_id: Meteor.userId()});

      following = (following.count() > 0)? following : false;
      Meteor.call("/get/venue/invites", following.venue_id, function(err, result){
        console.log('result: '+ result);
      });

      return following;
   }

});

/*****************************************************************************/
/* Profile: Lifecycle Hooks */
/*****************************************************************************/
Template.Profile.created = function () {
};

Template.Profile.rendered = function () {
};

Template.Profile.destroyed = function () {
};
