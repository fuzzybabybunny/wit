/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  //templateNameConverter: 'upperCamelCase',
  //templateNameConverter: 'camelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

  // var renderLoadingHook = function(pause){
  //   if (!this.ready()){
  //     this.render('Loading');
  //     pause();
  //   }
  // }
var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('entrySignIn');
    pause();
  }
};

Router.onBeforeAction(mustBeSignedIn, {only: ['admin', 'manage.venues', 'edit.venue'] });
Router.onRun(function(){});  //load code only once when the router in called
Router.onData(function(){}); //run anytime when the data changes
Router.onBeforeAction(function(){});
Router.onAfterAction(function(){});
Router.onStop(function(){}); //when the route in unloading (i.e. reset session state before user navigates away)

Router.onBeforeAction('loading');
// Router.onBeforeAction('loading', {only:['areas.index']});
//Router.onBeforeAction('dataNotFound');


Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('home', {
    path: '/',
    template: 'Home'
  });

  this.route('areas.index', {
    path: '/areas',
    template: 'AreasIndex'
  });

  this.route('area', {
    path: '/areas/:slug_area',
    template: 'Area'
  });

  this.route('venues.index', {
    path: '/venues',
    template: 'VenuesIndex'
  });

  this.route('activity', {
    path: '/activity',
    template: 'Activity'
  });

  this.route('venue.detail', {
    path: '/areas/:slug_area/:slug_name',
    template: 'VenueDetail'
  });

  this.route('edit.venue', {
    path: '/areas/:slug_area/:slug_name/edit',
    template: 'EditVenue'
  });

  this.route('invite', {
    path: '/areas/:slug_area/:slug_name/invite/:_id',
    template: 'Invite'
  });

  this.route('invite_id', {
    path: '/areas/:slug_area/:slug_name/invite/:invite_id',
    template: 'Invite'
  });

  this.route('edit.invite', {
    path: '/areas/:slug_area/:slug_name/invite/:_id/edit',
    template: 'EditInvite'
  });



//////////////////////////////////////////////////////////////
//
//                      ADMIN ROUTES
//
//////////////////////////////////////////////////////////////

  this.route('admin', {
    path: '/admin',
    template: 'Admin'
  });

  this.route('manage.venues', {
    path: '/admin/manage',
    template: 'ManageVenues'
  });

  this.route('create.venue', {
    path: '/admin/venue/create',
    template: 'CreateVenue'
  });

  this.route('view.invitations', {
    path: '/admin/invitations/:_id',
    template: 'ViewInvitations'
  });

  this.route('create.invitations', {
    path: '/admin/invitations',
    template: 'CreateInvitation'
  });

//////////////////////////////////////////////////////////////
//
//                      ADMIN ROUTES
//
//////////////////////////////////////////////////////////////

  this.route('profile', {
    path: '/profile',
    template: 'Profile'
  });

});

