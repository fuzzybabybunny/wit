/*****************************************************************************/
/* Activity: Event Handlers and Helpers */
/*****************************************************************************/
Template.Activity.events({
  'click tr.invite': function(e, tmpl){
    console.log("Invite clicked");
    var inviteId = this._id;
    Session.set('selectedInvite', inviteId);
    console.log("inviteId: " + Session.get('selectedInvite'));

    //update for invitePanel
     //$('.panelDetails').hide();
      id = this._id
      $('.panelDetails').hide();
      $('#showPanel-' + id).toggle(150);

  }


});

Template.Activity.helpers({
  selectedClass: function(){
    if (Session.get('selectedInvite') === this._id){
      return "selected";
    }
  },
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
      sort: { updated_at:-1 }
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
      sort: { updated_at:-1 }
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
      sort: { updated_at:-1 }
    });
   },

   tmrwsInvites: function(){
    return Invitations.find({
      active: true,
      'valid.days': { $in: [getDay(1)] },
      'valid.endDate': { $gte: getDate(1)},
      'valid.startDate': { $lt:  getDate(2)}

    },{
      sort: { updated_at:-1 }
    });
   },
   invitations: function(){
    return Invitations.find({active: true},{sort: {updated_at:-1}});
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

getDate = function(relative_day){
  relative_day = relative_day || 0;

  var year = JSON.parse(moment().format("YYYY"));
  var month = JSON.parse(moment().format("M"))-1;
  var day = JSON.parse(moment().format("D"))+relative_day;

  console.log(year + ',' + month + ',' + day);
  return new Date(year, month, day);
};

startOfDay = function(){
  return new Date(moment({H: 0, m: 1}));
};

getDay = function(relative_day){
  relative_day = relative_day || 1;
  //console.log(moment().format("d"));
  //return moment().format("d");
  //return "7";
  return moment().add('days', relative_day).format("d").toString();

};

timeNow = function(){
  console.log(moment().format("H.mm"));
  return JSON.parse(moment().format("H.mm"));
};