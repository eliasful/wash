import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),
  actions: {
    submit() {
      this.set('model.type', 'professional');
      this.set('model.password', this.get('model.email'));
      this.get('model').save().then((user) => {
        this.get('router').transitionTo('professional.new.services', user);
      });
    }
  }
});
