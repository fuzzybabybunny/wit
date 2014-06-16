/*****************************************************************************/
/* VenueDetail: Event Handlers and Helpers */
/*****************************************************************************/
Template.VenueDetail.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.VenueDetail.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   invitations: function(){
    console.log('invitations called');
    return Invitations.find({
      'venue_id': this._id
    }).map(function(invitation, index){
      invitation.rank = index + 1;
      return invitation;
    })
   },
   rankOrder: function(){
      if (this.active == true){
        return 'valid';
      } else{
        return 'inactive';
      }
   },
   timeFrom: function(){
    console.log('timeFrom' + this.valid.timeFrom);
    return moment({hour: this.valid.timeFrom, minute: 0}).format("h.mma");
   },
  timeTo: function(){
    console.log('timeFrom' + this.valid.timeTo);
    return moment({hour: this.valid.timeTo, minute: 0}).format("h.mma");
   }
});

/*****************************************************************************/
/* VenueDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.VenueDetail.created = function () {
};

Template.VenueDetail.rendered = function () {
};

Template.VenueDetail.destroyed = function () {
};
