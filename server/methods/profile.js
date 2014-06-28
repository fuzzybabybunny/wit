/*****************************************************************************/
/* Profile Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/profile/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */

  '/get/venue/invites': function(venue_id){
    //var followedVenues = Follows.find({user_id: Meteor.userId()});
    var invitations = Invitations.find({venue_id: venue_id});
    console.log('invtiations: ' + invtiations);
    return venue_id;
  }

});
