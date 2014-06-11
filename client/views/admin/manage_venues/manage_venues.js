/*****************************************************************************/
/* ManageVenues: Event Handlers and Helpers */
/*****************************************************************************/
Template.ManageVenues.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ManageVenues.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  venues: function(){
    return Venues.find({}, {
          sort: {
            created_at: -1
          }
      });
    },

  created_at_formatted: function(){
    var now = moment(this.created_at).format("DD-MMM-YY");
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
