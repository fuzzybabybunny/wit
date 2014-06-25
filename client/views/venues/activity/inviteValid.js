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

  results['date'] = timeNow;

  return results;
};

inviteWidget = function(invite) {
  var inviteChecked = inviteValid(invite, moment());
  var results = {};
  if (inviteChecked['activeNow']) {
    results['active'] = true;
    results['status'] = 'On now';
    results['style'] = 'invite-active';
    results['expiry'] = timeDiff(timeNow(), invite.timeTo);
  } else if (inviteChecked['activeSoon']) {
    results['soon'] = true;
    results['status'] = 'Active Soon';
    results['style'] = 'invite-soon';
    results['expiry'] = timeDiff(timeNow(), invite.timeFrom);
  }

  var getHour = function(time){
    return time - (time % 1);
  }
  var timeFrom =

  results['start'] = moment({h: getHour(invite.timeFrom), m: invite.timeFrom % 1 * 100}).format("h.mma");
  results['end'] = moment({h: getHour(invite.timeTo), m: invite.timeTo % 1 * 100}).format("h.mma");

  return results;
};


console.log(inviteValid(invite[1], moment()));