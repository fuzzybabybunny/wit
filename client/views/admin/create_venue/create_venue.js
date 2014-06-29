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
   'submit form': function(e,t){
     e.preventDefault();
     var venuename = t.find('input').value;
     console.log('Venue Name input: ' + venuename);
     autocomplete.getPlace().adr_address;
     autocomplete.bindTo('bounds',map);
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
  ge = new google.maps.Geocoder();
};

Template.CreateVenue.rendered = function () {
  autocomplete = new google.maps.places.Autocomplete(document.getElementById('fmVenueName'),{componentRestrictions:{country:'hk'}});
};

Template.CreateVenue.destroyed = function () {
};
