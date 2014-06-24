/*****************************************************************************/
/* Follows Publish Functions
/*****************************************************************************/

Meteor.publish('followingVenue', function () {
  return Follows.find();
});

Meteor.publish('userVenues', function () {
  return Follows.find();
});