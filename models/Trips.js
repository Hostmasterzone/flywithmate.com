Trips = new Mongo.Collection('Trips');

Trips.attachSchema(
    new SimpleSchema({
    userID:{
      type:String,
      denyUpdate:true
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    },
    startDate:{
      type:Date      
    },
    endDate: {
      type:Date
    },
    fromCity:{
      type:String
    },
    toCity:{
      type:String
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Trips.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
