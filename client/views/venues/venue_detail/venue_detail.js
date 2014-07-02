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
   invitesActiveNow: function(){
      return getInvites('active', this._id);
   },
   invitesActiveSoon: function(){
      return getInvites('soon', this._id);
   },
   rankOrder: function(){
      if (this.active === true){
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
      return Follows.find({
        venue_id: this._id
      },
      {
        sort: { created_at: -1 }
      }
      );
   },
   followersCount: function(){
      return Follows.find({venue_id: this._id}).count();
   },
   invite: function(){
    return inviteWidget(this.valid);
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
