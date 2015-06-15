import Ember from 'ember';

export default Ember.Controller.extend({
  title: Ember.computed.alias('model.title'),
  body: Ember.computed.alias('model.body'),
  comments: Ember.computed.alias('model.comments'),
  actions: {
    onNewComment: function() {
      var post = this.get('model');
      var body = this.get('commentBody');
      var comment = this.store.createRecord('comment', {
        body: body,
        post: post
      });
      comment.save();
      this.set('commentBody', '');
    }
  }
});
