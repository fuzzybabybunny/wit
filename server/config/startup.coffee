Meteor.startup ->
  AccountsEntry.config
    signupCode: 'onemoredrink'
    defaultProfile:
        someDefault: 'default'