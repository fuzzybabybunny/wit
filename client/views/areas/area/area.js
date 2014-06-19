/*****************************************************************************/
/* Area: Event Handlers and Helpers */
/*****************************************************************************/
Template.Area.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Area.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

   venues: function(){
    return Venues.find({'slug_area': this.slug_area});
   }
});

/*****************************************************************************/
/* Area: Lifecycle Hooks */
/*****************************************************************************/
Template.Area.created = function () {
};

Template.Area.rendered = function () {
};

Template.Area.destroyed = function () {
};
