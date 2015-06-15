import Ember from 'ember';

export default Ember.Controller.extend({
  posts: Ember.computed.alias('model')
});
