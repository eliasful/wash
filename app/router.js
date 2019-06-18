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
    this.route('dashboard', {
      path: '/:user_id/dashboard'
    });
  });

  this.route('user', function() {
    this.route('solicitation', function() {
      this.route('prices');
    });
    this.route('new');
    this.route('dashboard', {
      path: '/:user_id/dashboard'
    }, function() {
      this.route('solicitations');
      this.route('informations');
      this.route('address');
    });
  });
});

export default Router;
