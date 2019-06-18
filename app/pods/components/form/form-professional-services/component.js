import Component from '@ember/component';
import { inject as service } from '@ember/service';
import Swal from "sweetalert2";

export default Component.extend({
  store: service(),
  router: service(),
  serviceType: null,
  servicesType: null,
  userServices: null,
  userService: null,
  async didInsertElement() {
    const servicesType = await this.get('store').findAll('service-type');
    this.set('servicesType', servicesType);
    this.newUserService();
  },
  newUserService() {
    const userService = this.get('store').createRecord('user-service');
    userService.set('user', this.get('model'));
    this.set('userService', userService);
  },
  actions: {
    async addService() {
      const userService = this.get('userService');
      const price = parseFloat(userService.get('price'));
      userService.set('price', price);
      await userService.save();
      this.get('model.userServices').pushObject(userService);
      this.get('model').save();
      this.newUserService();
      if (this.get('notTransition')) {
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
      }
    },
    nextRoute() {
      this.get('router').transitionTo('professional.new.address', this.get('model'))
    }
  }
});
