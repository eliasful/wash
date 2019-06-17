import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),
  session: service(),
  actions: {
    submit() {
      this.set('model.type', 'professional');
      this.set('model.password', this.get('model.email'));
      this.get('model').save().then(async (user) => {
        await this.get('session').authenticate('authenticator:jwt', {
          email: user.get('email'),
          password: user.get('password')
        });
        this.get('router').transitionTo('professional.new.services', user);
      });
    }
  }
});
