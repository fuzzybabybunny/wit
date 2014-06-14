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
  }

});

getVenuesCount = function(area){
    //console.log('venues : ' + area.location)
    return Venues.find({
      'location.location': area.location
    });
};

/*****************************************************************************/
/* AreasIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.AreasIndex.created = function () {
};

Template.AreasIndex.rendered = function () {
};

Template.AreasIndex.destroyed = function () {
};
