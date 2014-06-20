UI.registerHelper('inviteToExpiry', function(input) {
   return timeDiff(timeNow(), this.valid.timeTo);
});