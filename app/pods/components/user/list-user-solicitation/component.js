import Component from '@ember/component';
import {inject as service} from '@ember/service';
import { computed} from '@ember/object';

export default Component.extend({
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
      for (let userSolicitation of this.get('model.userSolicitations')) {
        userSolicitation.set('status', 'Aguardando');
        await userSolicitation.save();
      }
      this.get('router').transitionTo('user.solicitation.dashboard')
    }
  }
});
