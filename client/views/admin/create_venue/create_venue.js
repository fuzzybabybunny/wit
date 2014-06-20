/*****************************************************************************/
/* CreateVenue: Event Handlers and Helpers */
/*****************************************************************************/
Template.CreateVenue.events({
   'click .afBtn': function(e,t){
      e.preventDefault();
      $('.autoform').toggle();
   },

   'input #fmVenueName': function(e, t){
      e.preventDefault();
      Session.set("fmVenueName", $(e.currentTarget).val());
   },
    'input #fmLocationFormattedAddress': function(e, t){
      e.preventDefault();
      Session.set("fmLocationFormattedAddress", $(e.currentTarget).val());
   }
});



Template.CreateVenue.helpers({
  fmVenueName: function(){ return Session.get("fmVenueName");},
  fmLocationFormattedAddress: function(){ return Session.get("fmLocationFormattedAddress");}
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
