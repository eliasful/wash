import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      service: this.store.createRecord('service'),
      users: this.store.findAll('user')
    });
  }
});
