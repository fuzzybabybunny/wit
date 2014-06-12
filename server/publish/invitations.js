/*****************************************************************************/
/* Invitations Publish Functions
/*****************************************************************************/

Meteor.publish('invitations', function () {
  // you can remove this if you return a cursor
  return Invitations.find();
});
