import DS from 'ember-data';
import environment from 'wash/config/environment';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';

export default DS.RESTAdapter.extend(TokenAuthorizerMixin, {
  session: service(),
  host: environment.urlServer,
  headers: computed('session.data.authenticated.token', function() {
    const headers = {};
    if (this.get('session.isAuthenticated')) {
      headers['Authorization'] = `Bearer ${this.get('session.data.authenticated.token')}`;
    }

    return headers;
  }),
});
