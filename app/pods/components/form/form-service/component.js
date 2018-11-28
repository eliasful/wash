import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default Component.extend({
  store: service(),
  services: A(),
  didInsertElement() {
    let service1 = this.get('store').createRecord('service', {
      description: 'Lavagem 1'
    });
    let service2 = this.get('store').createRecord('service', {
      description: 'Lavagem 2'
    });
    let service3 = this.get('store').createRecord('service', {
      description: 'Lavagem 3'
    });

    this.get('services').pushObject(service1);
    this.get('services').pushObject(service2);
    this.get('services').pushObject(service3);
  },
});
