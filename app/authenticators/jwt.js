import JWTAuthenticator from 'ember-simple-auth-jwt/authenticators/jwt';
import config from '../config/environment';

export default JWTAuthenticator.extend({
  serverTokenEndpoint: config.serverTokenEndpoint,
  serverRefreshTokenEndpoint: config.serverTokenRefreshEndpoint,
});
