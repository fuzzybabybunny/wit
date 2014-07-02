/*****************************************************************************/
/* Profile: Event Handlers and Helpers */
/*****************************************************************************/
Template.Profile.events({
   'click .edit-image': function(e, tmpl){
      e.preventDefault;
      id = this._id;
      filepicker.pick({
          mimetypes: ['image/*', 'text/plain'],
          container: 'window',
          //services:['COMPUTER', 'FACEBOOK', 'GMAIL', 'INSTAGRAM'],

        },
        function(InkBlob){
          var user = Meteor.users.findOne({'_id': Meteor.userId()});
          var images = [];

          _.extend(InkBlob, {'type': 'profile'});
          images.push(InkBlob);
          console.log('InkBlob + extend:' + JSON.stringify(images));

          var existingImages = user.profile.images;
          var result = [];
          var removedProfileImage = _.each(existingImages, function(image){
            if(image.type != 'profile'){
              result.push(image);
            } else{
              filepicker.remove(image, function(){
                  console.log("Removed");
              });
            }
          });

          images.push(result);
          console.log('images: ' + JSON.stringify(images));
          //_.extend(images, JSON.stringify(InkBlob));
          images = _.flatten(images);
          console.log( JSON.stringify(images));
          Meteor.users.update({ _id: id },{ $set: {'profile.images': images }});

        },
        function(FPError){
          console.log(FPError.toString());
        }
      );
    }
});

Template.Profile.helpers({
  profileImage: function(){
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var images = user.profile.images;
    //console.log(_.findWhere(images, {type: "profile"}));
    return _.findWhere(images, {type: "profile"});
  },
   user: function(){
    var user = Meteor.users.findOne();
    Session.set('username', user.username);
    //console.log(user.emails);
    return user;
   },
   stash: function(){
    var stash = Meteor.users.find({
      _id: Meteor.userId()
    },{
      fields: { 'profile.stash': 1 },
      sort: { added_at: -1 }
    }).fetch();

    stash =
      _.flatten(
        _.pluck(
          _.pluck(stash, 'profile'),
          "stash"),
        true
      );

      _.each(stash, function(element, index, list){
        var inviteStatus = getInviteStatus(element.invite_id);
        _.extend(stash[index], {status: inviteStatus});
      });

      stash = _.sortBy(stash, function(invite){
        return parseInt(invite["status"]["endIndex"]);
      });
      Session.set('stashCount', _.size(stash));

    return stash;
   },
   userFollowing: function(){
      var inviteCount;
      var invite;
      var following = Follows.find({
          user_id: Meteor.userId()
        }, {
          transform: function(doc){
            var inviteCount = getVenueInviteCount(doc.venue_id);

            return _.extend(doc, {
              'active_invites': inviteCount["active"],
              'soon_invites': inviteCount["soon"],
              'expired_invites': inviteCount["expired"],
              'total_invites': inviteCount["total"],
            });
          }
        }).fetch();

      //console.log(following);
      following = (_.size(following) > 0)? following : false;
      //console.log('venue_id: ' + following);

      return following;
   },
   followCount: function(){
      return Follows.find({user_id: Meteor.userId()}).count();
   },
   stashCount: function(){
      var stashCount = Session.get('stashCount')? Session.get('stashCount') : 0;
      return Session.get('stashCount');
   }

});

/*****************************************************************************/
/* Profile: Lifecycle Hooks */
/*****************************************************************************/
Template.Profile.created = function () {
};

Template.Profile.rendered = function () {
};

Template.Profile.destroyed = function () {
};
