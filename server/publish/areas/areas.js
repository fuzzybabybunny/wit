/*****************************************************************************/
/* AreasIndex Publish Functions
/*****************************************************************************/

Meteor.publish('areas', function () {
  // you can remove this if you return a cursor
  return Areas.find();
});
