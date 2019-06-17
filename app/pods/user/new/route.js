import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  session: service(),
  model() {
    return this.store.createRecord('user');
  },
  actions: {
    submit(model) {
      model.set('type', 'user');
      model.set('password', model.get('email'));
      model.save().then(async (user) => {
        await this.get('session').authenticate('authenticator:jwt', {
          email: user.get('email'),
          password: user.get('password')
        });
      });
    }
  }
});
