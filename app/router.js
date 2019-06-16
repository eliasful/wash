import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');

  this.route('professional', function() {
    this.route('new', function() {
      this.route('services', {
        path: '/:user_id/services'
      });
      this.route('address', {
        path: '/:user_id/address'
      });
      this.route('contact');
    });
    this.route('services');
  });

  this.route('user', function() {
    this.route('solicitation', function() {
      this.route('prices');
      this.route('dashboard');
    });
  });
});

export default Router;
