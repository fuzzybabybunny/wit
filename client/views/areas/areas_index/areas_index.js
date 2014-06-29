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
  },
  venuesCount: function(){
    //console.log('count from object: ' + getVenuesCount(this).count());
    return getVenuesCount(this).count();
  },
});

getVenuesCount = function(area){
    //console.log('venues : ' + area.location)
    return Venues.find({
      'location.venue_area': area.location
    });
};


/*****************************************************************************/
/* AreasIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.AreasIndex.created = function () {
};

Template.AreasIndex.rendered = function () {
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
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  map.setCenter(new google.maps.LatLng( 22.299, 114.160000 ));
  map.setOptions({styles:styles});

};

Template.AreasIndex.destroyed = function () {
};


