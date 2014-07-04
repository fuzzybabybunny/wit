/*****************************************************************************/
/* CreateInvitation: Event Handlers and Helpers */
/*****************************************************************************/
Template.CreateInvitation.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CreateInvitation.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   getToday: function(){
    return new Date();
   },
   getTime: function(){
    return moment.utc().format("LLLL");
   }
});

/*****************************************************************************/
/* CreateInvitation: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateInvitation.created = function () {
};

Template.CreateInvitation.rendered = function () {

  $('head').append('<script type="text/javascript" src="/js/moment.js"></script>');
  $('head').append('<script type="text/javascript" src="/js/daterangepicker.js"></script>');
  $('head').append('<script type="text/javascript" src="/js/bootstrap.js"></script>');

  $('#reservationtime').daterangepicker({ timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A' });

};

Template.CreateInvitation.destroyed = function () {
};


UI.registerHelper("timeOptions", function() {
    return [
        {label: "7:00", value: 7},
        {label: "8:00", value: 8},
        {label: "9:00", value: 9},
        {label: "10:00", value: 10},
        {label: "11:00", value: 11},
        {label: "noon", value: 12},
        {label: "13:00", value: 13},
        {label: "14:00", value: 14},
        {label: "15:00", value: 15},
        {label: "16:00", value: 16},
        {label: "17:00", value: 17},
        {label: "18:00", value: 18},
        {label: "19:00", value: 19},
        {label: "20:00", value: 20},
        {label: "21:00", value: 21},
        {label: "22:00", value: 22},
        {label: "23:00", value: 23},
        {label: "24:00", value: 24},
    ];
});
