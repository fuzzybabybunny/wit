Template.FollowVenue.events({
  'click .followVenue': function(e){
    e.preventDefault();
    var follow = {
      venue_id: this._id,
      venue_name: this.venue_name,
      slug_name: this.slug_name,
      slug_area: this.slug_area,
      user_id: Meteor.userId(),
      username: Meteor.user().username,
      created_at: new Date()
    };
    console.log(follow);
    follow._id = Follows.insert(follow);
  },
  'click .unFollow': function(e){
    e.preventDefault();
    console.log('unFollow');

    var followId = this._id;
    console.log('follow id: ' + followId);
    Meteor.call("unFollow", this._id);
    //Follows.remove({venue_id: this._id, user_id: Meteor.userId() });
  }
});

Template.FollowVenue.helpers({
  userFollowing: function(){
    console.log('find follow: ' + Meteor.userId());

    if( Meteor.userId() ){
      console.log('user exists, go find venue_id: ' + Session.get("venue_id"));
      return Follows.findOne({
        venue_id: Session.get("venue_id"),
        user_id: Meteor.userId()
      });
    }
  }


});

