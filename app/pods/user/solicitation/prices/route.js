import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { A } from '@ember/array';

export default Route.extend({
  loading: service(),
  model(params, transitions) {
    let ids = transitions.queryParams.ids;
    if (ids) {
      ids = JSON.parse(ids);
    }

    return this.store.query('user-service', {
      service: ids
    }).then(services => {
      return hash({
        services,
        quantity: transitions.queryParams.quantity || 1,
        userSolicitations: A([])
      });
    }).finally(() => {
      this.get('loading').change(false);
    });
  }
});
