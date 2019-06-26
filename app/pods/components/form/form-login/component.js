import Component from '@ember/component';
import {inject as service} from '@ember/service';
import Swal from "sweetalert2";

export default Component.extend({
  session: service('session'),
  router: service(),
  actions: {
    async login() {
      try {
        await this.get('session').authenticate('authenticator:jwt', {
          email: this.get('email'),
          password: this.get('password')
        });
        const userId = this.get('session.session.content.authenticated.user.id');
        const next = this.get('next');
        this.get('router').transitionTo(next, userId);
      } catch (e) {
        Swal.fire(
          'Ops!',
          'Não conseguimos autenticar você. Tente novamente!',
          'error'
        )
      }
    }
  }
});
