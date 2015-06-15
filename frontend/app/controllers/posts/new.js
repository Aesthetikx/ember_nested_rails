import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onNewPost: function() {
      var title = this.get('title');
      var body = this.get('body');
      var post = this.store.createRecord('post', {
        title: title,
        body: body
      });
      post.save();
    }
  }
});
