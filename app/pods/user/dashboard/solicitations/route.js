import Route from '@ember/routing/route';

export default Route.extend({
  model(params, transition) {
    const user = transition.params["user.dashboard"].user_id;
    return this.store.query('user-solicitation', {
      owner: user
    });
  }
});
