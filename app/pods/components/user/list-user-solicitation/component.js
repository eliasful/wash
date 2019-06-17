import Component from '@ember/component';
import {inject as service} from '@ember/service';
import { computed} from '@ember/object';
import Swal from 'sweetalert2';

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
    async verifyLogin() {
      if (this.get('session.isAuthenticated')) {
        this.sendAction('save');
      } else {
        const {value: [email, password]} = await Swal.fire({
          title: 'Acesse sua conta',
          html:
            `<input id="swal-input1" class="form-control" placeholder="E-mail">
            <input id="swal-input2" class="form-control" placeholder="Senha">
            <a href="/user/new" target="_blank">Ainda não possuí conta? Clique aqui para criar</a>`,
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value
            ]
          },
          confirmButtonText: 'Acessar conta e continuar',
          customClass: {
            confirmButton: 'btn btn-block btn-primary',
          },
          buttonsStyling: false
        });
        await this.get('session').authenticate('authenticator:jwt', email, password);
        this.sendAction('save');
      }
    },
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
