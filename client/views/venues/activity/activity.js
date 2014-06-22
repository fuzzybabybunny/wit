/*****************************************************************************/
/* Activity: Event Handlers and Helpers */
/*****************************************************************************/
Template.Activity.events({
  'click div.invite': function(e, tmpl){
    var inviteId = this._id;
    Session.set('selectedInvite', inviteId);
    //console.log("inviteId: " + Session.get('selectedInvite'));

    //update for invitePanel
     //$('.panelDetails').hide();
      id = this._id
      //$('.panelDetails').hide();
      $('#showPanel-' + id).toggle(150);
  },
  'click btn.btn-outline': function(e, tmpl){
    e.preventDefault
    $('.btn-outline').removeClass('selectedGroup');
    $('.showTab').hide();
    $(e.currentTarget).addClass('selectedGroup');

    var btnValue = $(e.currentTarget).attr("value");
    $('#' + btnValue).show();
  }
});

Template.Activity.helpers({
  selectedClass: function(){
    if (Session.get('selectedInvite') === this._id){
      return "selected";
    }
  },
  // inviteValid: function(){
  //   var invite = JSON.stringify(this);
  //   console.log('invite: ' + invite);
  //   inviteValid(invite, moment());
  //   return 'done';
  // },
  getHour: function(){
    return moment().format("HH.mm");
  },
   getDay: function(){
    return getDay();
   },
   getDate: function(){
    return moment().format("D");
   },
   todayStart: function(){
      //return new Date(moment({H: 0, m: 1}));
      return getDate(0);
   },
   endOfDay: function(){
      return getDate(1);
   },
   invitesActiveNow: function(){
      return Invitations.find({
        active: true,
        'valid.days': { $in: [getDay()] },
        'valid.endDate': { $gte: getDate(0)},
        'valid.startDate': { $lt:  getDate(1)},
        'valid.timeTo': { $gte: timeNow()},
        'valid.timeFrom': { $lt: timeNow()}
      },{
        sort: { 'valid.timeTo':1 }
      });
   },

   invitesActiveSoon: function(){
    return Invitations.find({
      active: true,
      'valid.days': { $in: [getDay()] },
      'valid.endDate': { $gte: getDate(0)},
      'valid.startDate': { $lt:  getDate(1)},
      'valid.timeTo': { $gte: timeNow()},
      'valid.timeFrom': { $gte: timeNow()}
    },{
      sort: { 'valid.timeFrom':1 }
    });
   },
   invitesExpired: function(){
    return Invitations.find({
      active: true,
      'valid.days': { $in: [getDay()] },
      'valid.endDate': { $gte: getDate(0)},
      'valid.startDate': { $lt:  getDate(1)},
      'valid.timeTo': { $lte: timeNow()}
      //'valid.timeFrom': { $gte: timeNow()}
    },{
      sort: { 'valid.timeTo':-1 }
    });
   },
   inviteExpiringAt: function(){
    return timeDiff(timeNow(), this.valid.timeTo);
   },
   inviteActiveAt: function(){
    return timeDiff(this.valid.timeFrom, timeNow());
   },
   inviteStartsAt: function(){
    return moment({h: getTotalMins(this.valid.timeFrom) / 60}).format("h:mma");
   },
   inviteEndsAt: function(){
    return moment({h: getTotalMins(this.valid.timeTo) / 60}).format("h:mma");
   },
   tmrwsInvites: function(){
    return Invitations.find({
      active: true,
      'valid.days': { $in: [getDay(1)] },
      'valid.endDate': { $gte: getDate(1)},
      'valid.startDate': { $lt:  getDate(2)}

    },{
      sort: { updated_at:-1 },
      limit: 10
    });
   },
   invitationsUpdated: function(){
    return Invitations.find({
        active: true
      },{
        sort: {updated_at:-1},
        limit: 10
      });
   },
  updated_at_formatted: function(){
    var now = moment(this.updated_at).fromNow();
    return now;
  },
  startDateFormatted: function(){
    return moment(this.valid.startDate).format("D-MM");
  },
  endDateFormatted: function(){
    return moment(this.valid.endDate).format("D-MM");
  },
  timeToFormatted: function(){
    return this.valid.timeTo + ":00";
  },
  timeFromFormatted: function(){
    return this.valid.timeFrom + ":00";
  },
  inviteWidget: function(){
    return inviteWidget(this.valid, moment());
  }
});

/*****************************************************************************/
/* Activity: Lifecycle Hooks */
/*****************************************************************************/
Template.Activity.created = function () {
};

Template.Activity.rendered = function () {
};

Template.Activity.destroyed = function () {
};


