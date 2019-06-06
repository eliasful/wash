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
      this.route('services');
      this.route('address');
      this.route('contact');
    });
    this.route('services');
  });
});

export default Router;
