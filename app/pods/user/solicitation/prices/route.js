import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

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
      return {
        services,
        quantity: transitions.queryParams.quantity || 1
      };
    }).finally(() => {
      this.get('loading').change(false);
    });
  }
});
