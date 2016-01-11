Router.route('/', function () {
  //this.layout('ResponsiveLayout');
  this.render('Home');
});


Router.route('/findCompanion', function () {
  this.render('findCompanion');
});

Router.route('/beCompanion', function () {
  this.render('beCompanion');
});

if (Meteor.isClient) {
  ApplicationController = RouteController.extend({
    layoutTemplate: 'ResponsiveLayout',

    onBeforeAction: function () {
      console.log('app before hook!');
      this.next();
    },

    action: function () {
      console.log('this should be overridden!');
    }
  });

  HomeController = ApplicationController.extend({
    action: function () {
      this.render('Home');
    }
  });

}