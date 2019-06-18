import Component from '@ember/component';
import { inject as service } from "@ember/service";
import Swal from "sweetalert2";

export default Component.extend({
  router: service(),
  session: service(),
  actions: {
    submit() {
      this.set('model.type', 'professional');
      const password = this.get('model.email');
      this.set('model.password', this.get('model.email'));
      this.get('model').save().then(async (user) => {
        if (this.get('notAuthenticate')) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Cadastro salvo com sucesso!'
          });
          return;
        }

        await this.get('session').authenticate('authenticator:jwt', {
          email: this.get('model.email'),
          password
        });
        this.get('router').transitionTo('professional.new.services', user);
      });
    }
  }
});
