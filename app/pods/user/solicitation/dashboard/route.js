import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.query('user-solicitation', {
      owner: params.user_id
    }).then(solicitations => solicitations.sortBy('status', 'desc'));
  },
  actions: {
    async avaliation(solicitation, rating) {
      solicitation.set('ratingProfessional', rating);
      await solicitation.save();
    }
  }
});
