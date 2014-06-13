/*****************************************************************************/
/* ViewInvitations: Event Handlers and Helpers */
/*****************************************************************************/
Template.ViewInvitations.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click .insert': function(e, tmpl){
      e.preventDefault;
      $('.resetAll').hide();
      id = this._id
      $('#insertForm').show();

      //$(e.currentTarget).html(
      //  $(e.currentTarget).text() == 'Create Invite' ? 'Hide Invite' : 'Create Invite'
      //);
   },

   'click .edit': function(e, tmpl){
      e.preventDefault;
      console.log('this.field: returns: ' + this.title.full);
      console.log('tmpl.data.field returns: ' + tmpl.data.contact.email);
      // console.log($(this));
      // console.log(this);
      // console.log(e.currentTarget);
      // console.log($(e.currentTarget));

      id = this._id
      console.log('id: ' + id);
      //$('#'+id).addClass('show');
      $('.resetAll').hide();
      $('#'+id).show();
   },

   'click .resetAllBtn': function(e, tmpl){
      $('.resetAll').hide();
   }
});

Template.ViewInvitations.helpers({
  /*
   * Example
   *  items: function () {
   *    return Items.find();
   *  }
   */
   venue: function(){
    return Venues.findOne({'_id': this._id});
   },

   // invitations: function(){
   //  //console.log('invitations->venue_id: ' + this._id);
   //  return getInvite(this._id);
   // },
   invitations: function(){
    return Invitations.find({'venue_id': this._id}).map(function(invitation, index){
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
   }
});

/*****************************************************************************/
/* Global helpers
/*****************************************************************************/

getInvite = function(venue_id){
    //console.log('venues : ' + venue.venue_name)
    return Invitations.find({
      'venue_id': venue_id
    });
};


/*****************************************************************************/
/* ViewInvitations: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewInvitations.created = function () {
};

Template.ViewInvitations.rendered = function () {
};

Template.ViewInvitations.destroyed = function () {
};

Template.ViewInvitations.editingDoc = function () {
  return this;
};