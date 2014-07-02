/*****************************************************************************/
/* CreateVenue: Event Handlers and Helpers */
/*****************************************************************************/
SimpleSchema.debug = true
Template.CreateVenue.events({
   'input #fmVenueName':function(e,t){
      e.preventDefault();
   },
   'blur #fmVenueName': function(e, t){
     Session.set("fmVenueName", $(e.currentTarget).val());
     document.getElementById('autofields').style.display = "block";
     $('html, body').animate({scrollTop:$("#autofields").offset().top,scrollLeft:0});
     document.getElementById("fmLocationFormattedAddress").select()
   },
   'focus #autofields': function(e,t){
     focused = document.activeElement;
     $('html, body').animate({scrollTop:$(focused).offset().top-30,scrollLeft:0});
   },
   'keypress input.venName': function(e,t){
      if(e.which === 13) {
        document.getElementById("fmLocationFormattedAddress").select()
        document.getElementById('autofields').style.display = "block";
        $('html, body').animate({scrollTop:$("#autofields").offset().top,scrollLeft:0});
      }
   }
});


Template.CreateVenue.helpers({
  fmVenueName: function(){ return Session.get("fmVenueName");},
  fmLocationFormattedAddress: function(){ return Session.get("fmLocationFormattedAddress");},
});

Template.CreateVenueMapAddr.events({
  //on addr change update marker
});

Template.CreateVenueMapAddr.helpers({
});

/*****************************************************************************/
/* CreateVenue: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateVenue.created = function () {
};

Template.CreateVenue.rendered = function () {
  autocomplete = new google.maps.places.Autocomplete(document.getElementById('fmVenueName'),{componentRestrictions:{country:'hk'}});
  // need a second autocomplete here to get the address for those not found on google maps
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
       place = autocomplete.getPlace();
       //UI.materialize(Template.CreateVenueMapAddr,document.getElementById('allcontent'));
       document.querySelector("[name*='slug_name']").value = getVenueSlug(place.name);
       if (typeof place != 'undefined' && typeof place.geometry != 'undefined' ){
          var mapOptions = {
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI:true
          };
          var styles = [
            {
              stylers: [
                {hue: "#00ffe6"},
                {saturation:-20}
              ]
            },{
              featureType: "road",
              elementType: "geometry",
              stylers: [{lightness:100},{visibility:"simplified"}]
            },{
              featureType:"road",
              elementType:"labels",
              stylers: [{visibility:"off"}]
            }
          ];
          document.getElementById('map-canvas').style.display = "block";
          var map = new google.maps.Map(document.getElementById('map-canvas'),
                                        mapOptions);
          map.setCenter(new google.maps.LatLng( 22.299, 114.160000 ));
          map.setOptions({styles:styles});
          autocomplete.bindTo('bounds',map);
          var marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: 'Venue Location'
          });
          document.querySelector("[name*='contact.url']").value = place.website
          document.querySelector("[name*='contact.phone']").value = place.international_phone_number
          document.querySelector("[name*='location.formatted_address']").value = place.formatted_address;
          document.querySelector("[name*='location.latlng.0']").value = [place.geometry.location.k];
          document.querySelector("[name*='location.latlng.1']").value = [place.geometry.location.B];

        } else {
          console.log('Place not found!');
          document.getElementById('map-canvas').style.display = "none"
        };
  });
};

Template.CreateVenueMapAddr.rendered = function () {
  document.getElementById('autofields').style.display = "none";
  ge = new google.maps.Geocoder();
};

Template.CreateVenue.destroyed = function () {
};

getVenueSlug = function(venName){
  var slugName = venName.replace(/\s+/g, '-').toLowerCase().trim();
  slugName = slugName.replace(/[,']+/g, "").trim().replace(/\s+/g,'-').toLowerCase();
  return slugName;
};

// Useful when testing autoform
//AutoForm.hooks(
  //{venuesCreateForm:
    //{before:
      //{insert: function(doc) {
          //console.log(JSON.stringify(doc.location));
          //return doc;
        //}
      //},
      //docToForm: function (doc) {
          //console.log("docToForm"+JSON.stringify(doc.location));
          //return doc;
      //},
      //formToDoc: function(doc) {
          //console.log("formToDoc"+JSON.stringify(doc.location));
          //return doc;
      //}
    //}
  //}
//);
