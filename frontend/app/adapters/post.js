import DS from "ember-data";
import UrlTemplates from "ember-data-url-templates";

export default DS.ActiveModelAdapter.extend(UrlTemplates, {
  urlTemplate: '{+host}/api/posts/{/id}',
});
