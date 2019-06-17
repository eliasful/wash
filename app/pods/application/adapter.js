import DS from 'ember-data';
import environment from 'wash/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: service(),
  host: environment.urlServer,
  authorizer: 'authorizer:jwt',
  headers: computed('session.data.authenticated.token', function() {
    const headers = {};
    if (this.get('session.isAuthenticated')) {
      headers['Authorization'] = `Bearer ${this.get('session.data.authenticated.token')}`;
    }

    return headers;
  }),
});
