UI.registerHelper("shortTimeFormat", function(timestamp){
  return moment(timestamp).fromNow();
});