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
  getVenueId: function(){
    return this._id;
  },
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
    return moment({hour: this.valid.timeFrom, minute: 0}).format("h.mma");
   },
  timeTo: function(){
    return moment({hour: this.valid.timeTo, minute: 0}).format("h.mma");
   },
   follows: function(){
      Session.set("venue_id", this._id);
      console.log('follows called, find venue_id: ' + this._id);
      var followers = Follows.find({venue_id: this._id});
      Session.set('followers', followers.count());
      return followers;
   },
   followersCount: function(){
      return Session.get('followers');
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
