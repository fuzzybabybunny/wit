/*****************************************************************************/
/* Follows Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/follows/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */

  unFollow: function(venue_id){
    Follows.remove({
      venue_id: venue_id,
      user_id: Meteor.userId()
    });
  }

});
