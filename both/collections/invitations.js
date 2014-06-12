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
      max: 50
    },
    slug_name: {
      type: String,
      label: "Friendly name for URL",
      max: 20
    },
    slug_location: {
      type: String,
      label: "Friendly location for URL",
      max: 20
    },
    active: {
      type: Boolean,
      label: "Is the offer currently active?"
    },
    quota: {
      type: Number,
      label: "Number of invites allowed (-1 for unlimited)"
    },
    "title.brief": {
      type: String,
      label: "Brief invitation title",
      max: 35
    },
    "title.full": {
      type: String,
      label: "Full title of the invitation",
      max: 100
    },
    description: {
      type: String,
      label: "Description of the invitation",
      max: 300
    },
      "valid.startDate": {
        type: Date,
        label: "Date the invite is valid from"
      },
      "valid.endDate": {
        type: Date,
        label: "Date the invite ends (can be an estimate)"
      },
        "valid.days.mon": {
          type: Boolean,
          label: "Monday",
          optional: true
        },
        "valid.days.tue": {
          type: Boolean,
          label: "Tuesday",
          optional: true
        },
        "valid.days.wed": {
          type: Boolean,
          label: "Wednesday",
          optional: true
        },
        "valid.days.thu": {
          type: Boolean,
          label: "Thurssday",
          optional: true
        },
        "valid.days.fri": {
          type: Boolean,
          label: "Friday",
          optional: true
        },
        "valid.days.sat": {
          type: Boolean,
          label: "Saturday",
          optional: true
        },
        "valid.days.sun": {
          type: Boolean,
          label: "Sunday",
          optional: true
        },
      "valid.timeFrom": {
        type: Date,
        label: "Time during the day the invite is valid from"
      },
      "valid.timeTo": {
        type: Date,
        label: "Time when offer expires during the day"
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
