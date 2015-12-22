Meteor.publish('User', function () {
  return User.find();
});
