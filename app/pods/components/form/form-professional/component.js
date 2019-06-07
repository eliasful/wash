import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),
  actions: {
    submit() {
      this.get('model').save().then((user) => {
        this.get('router').transitionTo('professional.new.services', user);
      });
    }
  }
});
