import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  loading: service(),
  servicesQuantity: null,
  servicesType: null,
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
    search(model) {
      this.get('loading').change();
      setTimeout(() => {
        this.get('loading').change();
      }, 1000);
    }
  }
});
