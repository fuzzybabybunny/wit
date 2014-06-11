/*****************************************************************************/
/* CreateVenue: Event Handlers and Helpers */
/*****************************************************************************/
Template.CreateVenue.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .docClear': function(e, t) {
      e.preventDefault();
      console.log('reset clicked');
      AutoForm.resetForm("quickForm");
      Session.set("selectedDoc", null);
    }
});

Template.CreateVenue.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateVenue: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateVenue.created = function () {
};

Template.CreateVenue.rendered = function () {
};

Template.CreateVenue.destroyed = function () {
};
