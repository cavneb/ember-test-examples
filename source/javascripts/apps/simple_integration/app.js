App = Ember.Application.create({
  rootElement: '#ember-app'
});
 
App.Router.map(function() {
  // put your routes here
});
 
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});