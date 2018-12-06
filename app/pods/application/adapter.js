import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  host: 'http://localhost:8080'
});
