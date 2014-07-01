/*****************************************************************************/
/* Invite: Event Handlers and Helpers */
/*****************************************************************************/
Template.Invite.events({
  'click .like': function(){
    Invitations.update({
      _id: this._id
    },{
      $inc: {saved: 1}
    });

    Meteor.users.update({
      _id: Meteor.userId()
    },{
      $push: {
        'profile.saved':
          {
            invite_id: this._id,
            invite_name: this.title.brief,
            venue_name: this.venue_name,
            slug_name: this.slug_name,
            slug_area: this.slug_area,
            added_at: new Date()
          }
        }
    });

  }
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
        'date': moment().add('days',i).format("ddd Do"),
        'today': moment().add('days', i).format("D ddd"),
        'valid': inviteValid(this.valid, moment().add('days', i))['activeToday']
      };
    }
    console.log(daysValid);
    return daysValid;
  },
  findSaved: function(){
    return findSaved = Meteor.users.findOne({
      _id: Meteor.userId(),
      'profile.saved.invite_id': this._id
    });
  },
  pageViews: function(){
    return this.views;
  },
  inviteSaved: function(){
    return this.saved;
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
  },
  inviteDate: function(){
    return Session.get('inviteDate');
  }

});

/*****************************************************************************/
/* Invite: Lifecycle Hooks */
/*****************************************************************************/
Template.Invite.created = function () {
};

Template.Invite.rendered = function () {
    Invitations.update({
      _id: this.data._id
    },{
      $inc: { views: 1 }
    });
    console.log(this.data);
};

Template.Invite.destroyed = function () {
};

UI.registerHelper('arrayify',function(obj){
    result = [];
    for (var key in obj) result.push({name:key,value:obj[key]});
    return result;
});
