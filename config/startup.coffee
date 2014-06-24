Meteor.startup ->
  AccountsEntry.config
    privacyUrl: '/privacy-policy'
    termsUrl: '/terms-of-use'
    homeRoute: '/activity'
    dashboardRoute: '/profile'
    profileRoute: 'profile'
    passwordSignupFields: 'USERNAME_AND_EMAIL'
    showSignupCode: true