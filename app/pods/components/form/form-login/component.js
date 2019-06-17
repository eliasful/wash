import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  session: service('session'),
  router: service(),
  actions: {
    async login() {
      await this.get('session').authenticate('authenticator:jwt', {
        email: this.get('email'),
        password: this.get('password')
      });
      const userId = this.get('session.session.content.authenticated.user.id');
      const next = this.get('next');
      this.get('router').transitionTo(next, userId);
    }
  }
});
