import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  session: service(),
  model(params) {
    return this.store.query('user-solicitation', {
      owner: params.user_id
    }).then(solicitations => solicitations.sortBy('status', 'desc'));
  },
  actions: {
    async avaliation(solicitation, rating) {
      solicitation.set('ratingProfessional', rating);
      await solicitation.save();
    },
    logout() {
      this.get('session').invalidate();
      this.get('router').transitionTo('home')
    }
  }
});
