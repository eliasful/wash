import DS from 'ember-data';
import environment from 'wash/config/environment';

export default DS.RESTAdapter.extend({
  host: environment.urlServer,
});
