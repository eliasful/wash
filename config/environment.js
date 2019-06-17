'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'wash',
    podModulePrefix: 'wash/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      
    }
  };

  if (environment === 'development') {
    ENV.urlServer = 'http://localhost:1337';
    ENV.serverTokenEndpoint = `${ENV.urlServer}/users/login`;
    ENV.serverTokenRefreshEndpoint = `${ENV.urlServer}/users/check/`;
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'professional.new.contact',
    authenticator: 'authenticator:jwt',
    crossOriginWhitelist: ['*'],
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: `${ENV.urlServer}/users/login`,
    serverTokenRefreshEndpoint: `${ENV.urlServer}/users/token-refresh/`,
    identificationField: 'email',
    refreshAccessTokens: false,
  };

  return ENV;
};
