import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:5050/api/v1',
  headers: computed(function() {
    return {
      // 'API_KEY': 'secret key',
      // 'ANOTHER_HEADER': 'Some header value'
    };
  }),
  pathForType(type) {
    return type.camelize();
  }
});
