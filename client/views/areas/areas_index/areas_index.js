/*****************************************************************************/
/* AreasIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.AreasIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.AreasIndex.helpers({
  areas: function(){
    return Areas.find();
  }
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* AreasIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.AreasIndex.created = function () {
};

Template.AreasIndex.rendered = function () {
};

Template.AreasIndex.destroyed = function () {
};
