# Ember Nested Rails

##Configure Rails to generate ember-esque json
```ruby
# config/initializers/active_model_serializer.rb
ActiveModel::Serializer.setup do |config|
  config.embed = :ids
  config.embed_in_root = true
end

# app/serializers/post_serializer.rb
class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  has_many :comments
end

# app/serializers/comment_serializer.rb
class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body
end
```

##Configure Ember to use nested routes
```javascript
// frontend/app/adapters/post.js
import DS from "ember-data";
import UrlTemplates from "ember-data-url-templates";

export default DS.ActiveModelAdapter.extend(UrlTemplates, {
  urlTemplate: '{+host}/api/posts/{/id}',
});

// frontend/app/adapters/comment.js
import DS from "ember-data";
import UrlTemplates from "ember-data-url-templates";

export default DS.ActiveModelAdapter.extend(UrlTemplates, {
  urlTemplate: '{+host}/api/posts/{postId}/comments{/id}',

  urlSegments: {
    postId(type, id, snapshot, query) {
      return snapshot.belongsTo('post', { id: true });
    },
  }
});
```
