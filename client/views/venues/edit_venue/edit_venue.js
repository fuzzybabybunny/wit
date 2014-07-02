/*****************************************************************************/
/* EditVenue: Event Handlers and Helpers */
/*****************************************************************************/
Template.EditVenue.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click .image': function(e, tmpl){
      e.preventDefault;
      id = this._id;
      filepicker.pick({
          mimetypes: ['image/*', 'text/plain'],
          container: 'window',
          //services:['COMPUTER', 'FACEBOOK', 'GMAIL', 'INSTAGRAM'],

        },
        function(InkBlob){
          console.log(JSON.stringify(InkBlob));
          console.log(InkBlob.url);
          console.log('id: ' + id);

          var venue = Venues.findOne({'_id': id});
          var images = venue.images;
          //console.log('images: ' + JSON.stringify(images));

          images.push(InkBlob);
          //_.extend(images, JSON.stringify(InkBlob));

          //console.log('images + push: ' + images);
          Venues.update({ _id: id },{ $set: {'images': images }});

        },
        function(FPError){
          console.log(FPError.toString());
        }
      );
    }

});

Template.EditVenue.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  venue: function(){
    return Venues.findOne({'_id': this._id});
   }
});

/*****************************************************************************/
/* EditVenue: Lifecycle Hooks */
/*****************************************************************************/
Template.EditVenue.created = function () {
};

Template.EditVenue.rendered = function () {
};

Template.EditVenue.destroyed = function () {
};

Template.EditVenue.editingDoc = function () {

  return this;
};