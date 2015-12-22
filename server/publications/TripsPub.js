Meteor.publish('Trips', function () {
  return Trips.find();
});
