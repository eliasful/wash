import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      servicesType: this.store.findAll('service-type'),
      servicesQuantity: this.store.findAll('service-quantity'),
      users: this.store.findAll('user')
    });
  }
});
