/*****************************************************************************/
/* VenuesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('venues', function () {
  // you can remove this if you return a cursor
  return Venues.find();
});
