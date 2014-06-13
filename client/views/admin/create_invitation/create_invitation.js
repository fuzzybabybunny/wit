/*****************************************************************************/
/* CreateInvitation: Event Handlers and Helpers */
/*****************************************************************************/
Template.CreateInvitation.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CreateInvitation.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   getToday: function(){
    return new Date();
   }
});

/*****************************************************************************/
/* CreateInvitation: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateInvitation.created = function () {
};

Template.CreateInvitation.rendered = function () {
};

Template.CreateInvitation.destroyed = function () {
};
