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
    return getVenuesCount(this);
  },
});

getVenuesCount = function(area){
    //console.log('venues : ' + area.location)
    return Venues.find({
      'location.venue_area': area.location
    }).count();
};

/*****************************************************************************/
/* AreasIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.AreasIndex.created = function () {
};

Template.AreasIndex.rendered = function () {
  if(!this.rendered){
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

    var areamap = new google.maps.Map(document.getElementById('map-canvas2'),
                                  mapOptions);
    areamap.setCenter(new google.maps.LatLng( 22.299, 114.160000 ));
    areamap.setOptions({styles:styles});
//    this.rendered = true;
  };

  // Example fetching location Venues.find().fetch('location')[0].location;

  _.each(Venues.find().fetch(''),function(e,i){
    console.log(e.location.latlng);
    new google.maps.Marker({
      position: new google.maps.LatLng(e.location.latlng[0],e.location.latlng[1]),
      map:areamap
    });
  });
};

Template.AreasIndex.destroyed = function () {
};


