/*****************************************************************************/
/* Users Publish Functions
/*****************************************************************************/

Meteor.publish('currentUserData', function () {
  // you can remove this if you return a cursor
  return Meteor.users.find({}, {
    fields: {
      'emails': 1,
      'profile': 1,
      'username': 1
    }
  });
});
