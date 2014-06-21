getDate = function(relative_day) {
  relative_day = relative_day || 0;

  var year = JSON.parse(moment().format("YYYY"));
  var month = JSON.parse(moment().format("M")) - 1;
  var day = JSON.parse(moment().format("D")) + relative_day;

  //console.log(year + ',' + month + ',' + day);
  return new Date(year, month, day);
};

startOfDay = function() {
  return new Date(moment({
    H: 0,
    m: 1
  }));
};

getDay = function(relative_day) {
  relative_day = relative_day || 0;
  // console.log('getday: ' + moment().format("d"));
  // return moment().format("d");
  // return "7";
  console.log('returing: ' + moment().add('days', relative_day).format("d").toString());
  return (JSON.parse(moment().add('days', 1).format("d")) + 1).toString();
};

timeNow = function() {
  // console.log(moment().format("H.mm"));
  return JSON.parse(moment().format("H.mm"));
};

getTotalMins = function(timeOfDay) {
  var mins = (timeOfDay % 1);
  // console.log('timeOfDay: ' + timeOfDay);
  // console.log('mins: ' + mins);
  var totalMins = (timeOfDay - mins) * 60 + mins * 100;
  // console.log('totalMins: ' + totalMins);
  return totalMins;
}

timeDiff = function(startTime, finishTime) {
  var minutesToExpire = getTotalMins(finishTime) - getTotalMins(startTime);
  // console.log('startTime: ' + startTime);
  // console.log('finishTime: ' + finishTime);
  // console.log('total mins:' + minutesToExpire);
  // console.log('Hours: ' + hours);
  // console.log('Minutes: ' + minutes);

  var inHours = minutesToExpire / 60;
  var minutes = inHours % 1 * 60 / 100;
  minutes = Math.round(minutes * 100);
  var hours = Math.floor(inHours - minutes / 100);

  if (minutesToExpire < 60) {
    expiry = Math.round(minutesToExpire) + 'min';
  } else {
    expiry = hours + 'hr ' + minutes + 'm';
  };
  return expiry;

}