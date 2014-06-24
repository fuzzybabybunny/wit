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
      return Follows.find({user_id: Meteor.userId()});
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
