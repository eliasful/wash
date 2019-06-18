import Route from '@ember/routing/route';
import {A} from '@ember/array';

export default Route.extend({
  async model(params) {
    await this.store.findAll('user-solicitation');
    const userServices = await this.store.query('user-service', {
      user: params.user_id
    });
    const userSolicitations = A([]);
    userServices.forEach(userService => {
      userService.get('userSolicitations').forEach(userSolicitation => {
        userSolicitations.pushObject(userSolicitation);
      });
    });
    return userSolicitations.sortBy('status', 'desc');
  },
});
