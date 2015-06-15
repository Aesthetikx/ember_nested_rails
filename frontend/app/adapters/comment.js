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
