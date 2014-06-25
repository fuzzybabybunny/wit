/*****************************************************************************/
/* Invite: Event Handlers and Helpers */
/*****************************************************************************/
Template.Invite.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Invite.helpers({
  invitations: function(){
    return Invitations.findOne({_id: this._id});
  },
  checkInvite: function(){
    return inviteValid(this.valid, moment());
  },
  activeNow: function(){
    return inviteValid(this.valid, moment())['activeNow'];
  },
  activeSoon: function(){
    return inviteValid(this.valid, moment())['activeSoon'];
  },
  validNextSevenDays: function(){
    var daysValid = [];
    for (i=0; i< 7; i++){
      daysValid[i] = {
        'day': i,
        'date': moment().add('days',i).format("Do"),
        'valid': inviteValid(this.valid, moment().add('days', i))['activeToday']
      };
    }
    console.log(daysValid);
    return daysValid;
  },
  inviteWidget: function(){
    return inviteWidget(this.valid, moment());
  },
  starts: function(){
    return moment(this.valid.startDate).format("DD MMM, YYYY");
  },
  ends: function(){
    return moment(this.valid.endDate).format("Do MMM");
  },
  venue: function(){
    console.log('venue_id ' + this.venue_id);
    return Venues.findOne({_id: this.venue_id});
  }

});

/*****************************************************************************/
/* Invite: Lifecycle Hooks */
/*****************************************************************************/
Template.Invite.created = function () {
};

Template.Invite.rendered = function () {
};

Template.Invite.destroyed = function () {
};

UI.registerHelper('arrayify',function(obj){
    result = [];
    for (var key in obj) result.push({name:key,value:obj[key]});
    return result;
});
