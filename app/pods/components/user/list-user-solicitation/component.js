import Component from '@ember/component';
import {inject as service} from '@ember/service';
import { computed} from '@ember/object';

export default Component.extend({
  session: service(),
  store: service(),
  router: service(),
  totalServices: computed('model.userSolicitations.length', function () {
    let total = 0;
    this.get('model.userSolicitations').forEach(solicitation => {
      total += solicitation.get('userService.price');
    });
    return total * this.get('model.quantity');
  }),
  actions: {
    async save() {
      const user = this.get('session.session.content.authenticated.user.id');
      for (let userSolicitation of this.get('model.userSolicitations')) {
        userSolicitation.set('status', 'Aguardando');
        userSolicitation.set('owner', this.get('store').peekRecord('user', user));
        await userSolicitation.save();
      }
      this.get('router').transitionTo('user.solicitation.dashboard', user);
    }
  }
});
