import Component from '@ember/component';
import {inject as service} from '@ember/service';
import Swal from "sweetalert2";

export default Component.extend({
  session: service(),
  actions: {
    submit(model) {
      model.set('type', 'user');
      const password = model.get('email');
      model.set('password', password);

      model.save().then(async (user) => {
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
          email: user.get('email'),
          password
        });
      });
    }
  }
});
