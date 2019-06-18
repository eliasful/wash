import Route from '@ember/routing/route';

export default Route.extend({
  model(params, transition) {
    const user = transition.params["professional.dashboard"].user_id;
    return this.store.findRecord('user', user);
  }
});
