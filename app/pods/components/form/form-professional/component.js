import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),
  session: service(),
  actions: {
    submit() {
      this.set('model.type', 'professional');
      const password = this.get('model.email');
      this.set('model.password', this.get('model.email'));
      this.get('model').save().then(async (user) => {
        await this.get('session').authenticate('authenticator:jwt', {
          email: this.get('model.email'),
          password
        });
        this.get('router').transitionTo('professional.new.services', user);
      });
    }
  }
});
