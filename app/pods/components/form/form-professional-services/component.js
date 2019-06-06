import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  serviceType: null,
  servicesType: null,
  userServices: null,
  async didInsertElement() {
    const servicesType = await this.get('store').findAll('service-type');
    this.set('servicesType', servicesType);
    this.newUserService();
  },
  newUserService() {
    const userService = this.get('store').createRecord('user-service');
    this.set('userService', userService);
  },
  actions: {
    addService() {
      const userService = this.get('userService');
      this.get('model.userServices').pushObject(userService);
      this.get('model').save();
      this.newUserService();
    }
  }
});
