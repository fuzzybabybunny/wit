/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpers */
/*****************************************************************************/
Template.MasterLayout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */

   onLogin: function(){
      function generate(type) {
          var n = noty({
              text        : type,
              type        : type,
              dismissQueue: false,
              layout      : 'topCenter',
              theme       : 'defaultTheme'
          });
          console.log(type + ' - ' + n.options.id);
          return n;
      }

      $(document).ready(function () {

          var alert = generate('alert');
          var information = generate('information');
          var error = generate('error');
          var warning = generate('warning');
          var notification = generate('notification');
          var success = generate('success');

          setTimeout(function () {
              $.noty.setText(alert.options.id, 'I\'m closing now!'); // same as alert.setText('Text Override')
          }, 1000);

          setTimeout(function () {
              $.noty.close(alert.options.id);
          }, 3000);

      });
   }

});

Template.MasterLayout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
    $('head').append('<script type="text/javascript" src="/js/filepicker.js"/>');
    filepicker.setKey('AOz6zhDqjTnuenfBEE65qz');
};

Template.MasterLayout.rendered = function () {
};

Template.MasterLayout.destroyed = function () {
};
