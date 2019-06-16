import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('user-solicitation').then(solicitations => solicitations.sortBy('status', 'desc'));
  }
});
