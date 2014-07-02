var invite = {};

invite[0] = {
  startDate: new Date("2014-06-19T16:01:00Z"),
  endDate: new Date("2014-11-30T16:59:00Z"),
  days: [
    "1",
    "2",
    "3",
    "4",
    "5"
  ],
  timeFrom: 13,
  timeTo: 18
};

invite[1] = {
  startDate: new Date("2014-06-19T16:01:00Z"),
  endDate: new Date("2014-11-30T16:59:00Z"),
  days: [
    "0",
    "3",
    "4",
    "5",
    "6"
  ],
  timeFrom: 18,
  timeTo: 20
};


//***********************************************
//
//  inviteValid
//  validates an invite if it is valid
//
//
//***********************************************

inviteValid = function(invite, timeTest) {
  var timeNow = timeTest ? timeTest : moment();
  timeNow = moment(timeNow).isValid() ? timeNow : moment();
  //console.log('time to test against invite: ' + timeNow.format("YYYY-M-D dd HH:mm"));

  var results = {};

  var dayOfWeek = (JSON.parse(moment(timeNow).format("d"))).toString();
  //console.log('getDate: ' + dayOfWeek);

  results['dayValid'] = (invite.days.indexOf(dayOfWeek) > -1) ? true : false;
  //console.log('test day: ' + dayOfWeek + ' is in index ' + invite.days);
  // console.log('dayValid: ' + dayValid);

  results['startDateValid'] = (
    invite.startDate <
    new Date(timeTest)
  ) ? true : false;
  // console.log('startDateValid : ' + startDateValid);

  results['endDateValid'] = (
    invite.endDate >=
    new Date(timeTest)
  ) ? true : false;
  // console.log('endDateValid : ' + endDateValid);

  results['startTimeValid'] = (
    invite.timeFrom <=
    JSON.parse(moment(timeTest).format("H.mm"))
  ) ? true : false;
  // console.log(': ' + invite.timeFrom);
  // console.log('< ' + JSON.parse(moment(timeTest).format("H.mm")));
  // console.log('startTimeValid : ' + startTimeValid);

  results['endTimeValid'] = (
    invite.timeTo >
    JSON.parse(moment(timeTest).format("H.mm"))
  ) ? true : false;
  // console.log('endTimeValid : ' + endTimeValid);

  results['activeNow'] = _.min(_.map(results, function(boolean) {
    return boolean * 1;
  }));
  results['activeSoon'] = !results['startTimeValid'] &&
    results['dayValid'] *
    results['startDateValid'] *
    results['endDateValid'] *
    results['endTimeValid'];

  results['activeToday'] =
    results['dayValid'] *
    results['startDateValid'] *
    results['endDateValid'];

  results['expired'] = results['activeToday'] *
    !results['activeSoon'] *
    !results['activeNow'];

  results['date'] = timeNow;

  return results;
};

inviteWidget = function(invite) {
  var inviteChecked = inviteValid(invite, moment());
  var results = {};
  var getHour = function(time){
    return time - (time % 1);
  };

  var endHour = moment({h: getHour(invite.timeTo), m: invite.timeTo % 1 * 100}).format("H");

  if (inviteChecked['activeNow']) {
    results['active'] = true;
    results['status'] = 'On now';
    results['style'] = 'invite-active';
    results['expiry'] = timeDiff(timeNow(), invite.timeTo);
    results['endIndex'] = endHour;
  } else if (inviteChecked['activeSoon']) {
    results['soon'] = true;
    results['status'] = 'Active Soon';
    results['style'] = 'invite-soon';
    results['expiry'] = timeDiff(timeNow(), invite.timeFrom);
    results['endIndex'] = parseInt(endHour) + 24;
  } else if (inviteChecked['expired']) {
    results['expired'] = true;
    results['status'] = 'Expired';
    results['style'] = 'invite-expired';
    results['expiry'] = timeDiff(invite.timeTo, timeNow());
    results['endIndex'] = parseInt(endHour) + 48;
  }


  results['start'] = moment({h: getHour(invite.timeFrom), m: invite.timeFrom % 1 * 100}).format("h.mma");
  results['end'] = moment({h: getHour(invite.timeTo), m: invite.timeTo % 1 * 100}).format("h.mma");

  return results;
};

getVenueInviteCount = function(venue_id){
  var invites = Invitations.find({venue_id: venue_id}).fetch();
  var invitesValid = _.pluck(invites, "valid");
  var inviteCount=[];
  inviteCount["active"] = 0;
  inviteCount["soon"] = 0;
  inviteCount["expired"] = 0;
  inviteCount["total"] = 0;

  _.map(invitesValid, function(valid){
    invite = inviteWidget(valid);
    //console.log(invite);
    inviteCount["active"] += (invite['active'])? 1 : 0;
    inviteCount["soon"] += (invite['soon'])? 1 : 0;
    inviteCount["expired"] += (invite['expired'])? 1 : 0;
    inviteCount["total"] += 1;

  });
  return inviteCount;
};

getInviteStatus = function(invite_id){
  var invite = Invitations.findOne({_id: invite_id});
  return inviteWidget(invite.valid);
};

getInvites = function(type){
  var invites;
  if(type == 'active'){
      invites = Invitations.find({
        active: true,
        'valid.days': { $in: [getDay()] },
        'valid.endDate': { $gte: getDate(0)},
        'valid.startDate': { $lt:  getDate(1)},
        'valid.timeTo': { $gte: timeNow()},
        'valid.timeFrom': { $lt: timeNow()}
      },{
        sort: { 'valid.timeTo':1 }

      }).fetch();

      console.log(invites);

      var invitesExtended = _.map(invites, function(invite){
          invite = _.extend(invite, {
            timingShow: true,
            timing: timeDiff(timeNow(), invite.valid.timeTo),
            timingLabel: 'expires'
          });
          console.log(invite);
          return invite;
      });
  } else if( type == 'soon'){
    invites = Invitations.find({
      active: true,
      'valid.days': { $in: [getDay()] },
      'valid.endDate': { $gte: getDate(0)},
      'valid.startDate': { $lt:  getDate(1)},
      'valid.timeTo': { $gte: timeNow()},
      'valid.timeFrom': { $gte: timeNow()}
    },{
      sort: { 'valid.timeFrom':1 }
    }).fetch();

      console.log(invites);

      var invitesExtended = _.map(invites, function(invite){
          invite = _.extend(invite, {
            timingShow: true,
            timing: timeDiff(invite.valid.timeFrom, timeNow()),
            timingLabel: 'expires'
          });
          console.log(invite);
          return invite;
      });
    }


  console.log(invitesExtended);
  return invitesExtended;


}

console.log(inviteValid(invite[1], moment()));