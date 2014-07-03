/*****************************************************************************/
/* ManageVenues: Event Handlers and Helpers */
/*****************************************************************************/

// getInvites = function(venue){
//     console.log('venues : ' + venue.venue_name)
//     return Invitations.find({
//       'venue_id': venue._id
//     });
// };



Template.ManageVenues.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ManageVenues.helpers({

  venues: function(){
    return Venues.find({}, {
          sort: {
            updated_at: -1
          }
      });
    },

  invites: function(){
    return Invitations.find({
      'venue_id': this._id
    });
  },

  invites_count: function(){
    //console.log('count from object: ' + getInvites(this).count());
    return _.size(this);
  },

  created_at_formatted: function(){
    var now = moment(this.created_at).format("Do MMM");
    return now;
  },
  updated_at_formatted: function(){
    var now = moment(this.updated_at).fromNow();
    return now;
  }

});

/*****************************************************************************/
/* ManageVenues: Lifecycle Hooks */
/*****************************************************************************/
Template.ManageVenues.created = function () {
};

Template.ManageVenues.rendered = function () {
};

Template.ManageVenues.destroyed = function () {
};
