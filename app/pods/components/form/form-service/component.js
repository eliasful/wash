import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  router: service(),
  loading: service(),
  servicesQuantity: null,
  servicesType: null,
  selectedServices: null,
  selectedQuantity: null,
  async didInsertElement() {
    const servicesType = await this.get('store').findAll('service-type');
    this.set('servicesType', servicesType);
    this.set('servicesQuantity', [{
      description: '1 pessoa',
      value: 1,
    }, {
      description: '2 pessoas',
      value: 2,
    }, {
      description: '3 pessoas',
      value: 3,
    }, {
      description: '4 pessoas',
      value: 4,
    }, {
      description: 'Mais de 4 pessoas',
      value: 5,
    }]);
  },
  actions: {
    async search(model) {
      const ids = this.get('selectedServices').mapBy('id');
      if (!ids.get('length')) {
        return
      }

      this.get('loading').change(true);
      this.get('router').transitionTo('user.solicitation.prices', {
        queryParams: {
          ids,
          quantity: this.get('selectedQuantity.value')
        }
      });
    }
  }
});
