import Component from '@ember/component';
import {inject as service} from '@ember/service';
import { computed} from '@ember/object';
import Swal from 'sweetalert2';

export default Component.extend({
  session: service(),
  store: service(),
  router: service(),
  userSolicitation: null,
  openModal: false,
  totalServices: computed('model.userSolicitations.length', 'model.userSolicitations.@each.quantity', function () {
    let total = 0;
    this.get('model.userSolicitations').forEach(solicitation => {
      total += solicitation.get('userService.price') * solicitation.get('quantity');
    });
    return total;
  }),
  actions: {
    async verifyLogin() {
      if (this.get('session.isAuthenticated')) {
        this.send('save');
      } else {
        const {value: [email, password]} = await Swal.fire({
          title: 'Acesse sua conta',
          html:
            `<input id="swal-input1" class="form-control" placeholder="E-mail">
            <input id="swal-input2" type="password" class="form-control" placeholder="Senha">
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
        await this.get('session').authenticate('authenticator:jwt', {
          email,
          password
        });
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
      this.get('router').transitionTo('user.dashboard.solicitations', user);
    },
    openModal(userSolicitation) {
      this.set('userSolicitation', userSolicitation);
      this.set('openModal', true);
    }
  }
});
