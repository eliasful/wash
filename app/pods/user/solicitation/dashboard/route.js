import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('user-solicitation');
  },
  actions: {
    async avaliation(solicitation, rating) {
      solicitation.set('ratingProfessional', rating);
      await solicitation.save();
    }
  }
});
