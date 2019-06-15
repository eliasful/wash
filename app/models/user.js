import DS from 'ember-data';
import EmberValidations from 'ember-validations';
import { inject as service } from '@ember/service';

export default DS.Model.extend(EmberValidations, {
  geolocation: service(),

  username: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  name: DS.attr('string'),
  phone: DS.attr('string'),
  birthday: DS.attr('date'),
  document: DS.attr('string'),

  address: DS.attr('string'),
  lat: DS.attr('string'),
  lng: DS.attr('string'),

  userServices: DS.hasMany('user-service'),
});
