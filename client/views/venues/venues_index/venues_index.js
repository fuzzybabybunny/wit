/*****************************************************************************/
/* VenuesIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.VenuesIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.VenuesIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   venues: function(){
    return Venues.find({}, {
      sort: {
        created_at: -1
      }
    });
   },

   isRemovedClass: function(){
    return this.is_remove ? 'remove' : '';
   }

});

Template.VenueItem.helpers({
   isRemoveChecked: function(){
    return this.is_remove ? 'checked' : '';
   }
});

Template.VenueItem.events({
  'click [name=is_remove]': function(e, tmpl){
    var id = this._id;
    var isRemove = tmpl.find('input').checked;
    Venues.update({_id: id}, {
      $set: {
        is_remove: isRemove
      }
    });
  }

});

Template.CreateVenueItem.events({
  'submit form': function(e, tmpl){
    e.preventDefault();

    var venueName = tmpl.find('input').value;

    Venues.insert({
      name: venueName,
      created_at: new Date,
      is_remove: false
    });

    var form = tmpl.find('form');
    form.reset();
  }
});

/*****************************************************************************/
/* VenuesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.VenuesIndex.created = function () {
};

Template.VenuesIndex.rendered = function () {
};

Template.VenuesIndex.destroyed = function () {
};
