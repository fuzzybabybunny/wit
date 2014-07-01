Invitations = new Meteor.Collection('invitations', {
  schema: new SimpleSchema({
    venue_id: {
      type: String,
      label: "Associated venue_id",
      max: 50
    },
    venue_name: {
      type: String,
      label: "Venue name",
      max: 50,
      optional: true
    },
    slug_name: {
      type: String,
      label: "Friendly name for URL",
      max: 20,
      optional: true
    },
    slug_area: {
      type: String,
      label: "Friendly location for URL",
      max: 20,
      optional: true
    },
    venue_area: {
      type: String,
      label: "Area",
      max: 40,
      optional: true
    },
    active: {
      type: Boolean,
      label: "Is the offer currently active?",
      optional: true
    },
    quota: {
      type: Number,
      label: "Number of invites allowed (-1 for unlimited)",
      optional: true
    },
    "title.brief": {
      type: String,
      label: "Brief invitation title",
      max: 35,
      optional: true
    },
    "title.full": {
      type: String,
      label: "Full title of the invitation",
      max: 100,
      optional: true
    },
    description: {
      type: String,
      label: "Description of the invitation",
      max: 300,
      optional: true
    },
    invite_type: {
      type: String,
      label: "Invitation type",
      max: 20,
      optional: true,
      allowedValues: ['public', 'exclusive', 'private']
    },
    category: {
      type: String,
      label: "Invite category",
      max: 50,
      optional: true,
      allowedValues: ['promotion', 'drink', 'food', 'experience', 'reservation', 'event']
    },
      "valid.startDate": {
        type: Date,
        label: "Date the invite is valid from",
        optional: true
      },
      "valid.endDate": {
        type: Date,
        label: "Date the invite ends (can be an estimate)",
        optional: true
      },
      "valid.timeFrom": {
        type: Number,
        label: "Time during the day the invite is valid from",
        optional: true
      },
      "valid.timeTo": {
        type: Number,
        label: "Time when offer expires during the day",
        optional: true
      },
      "valid.days":{
        type: [String],
        minCount: 0,
        maxCount: 7,
        label: 'Sunday = 0, Monday = 1 etc',
        allowedValues: ["0","1","2","3","4","5","6"],
        optional: true
      },
      views: {
        type: Number,
        label: "Page views of the invite",
        optional: true
      },
      likes: {
        type: Number,
        label: "Users liking the invite",
        optional: true
      },

    updated_at: {
      type: Date,
      label: 'Updated at',
      autoValue: function(){
          return new Date(); //moment().toString();
      }
    },
    created_at: {
      type: Date,
      label: 'Created at',
      autoValue: function(){
        if(this.isInsert){
          return new Date();
        }
      },
    }
  }),
});

/*
 * Add query methods like this:
 *  Invitations.findPublic = function () {
 *    return Invitations.find({is_public: true});
 *  }
 */
