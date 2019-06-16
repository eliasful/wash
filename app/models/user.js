import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  email: DS.attr('string'),
  password: DS.attr('string'),
  type: DS.attr('string'),
  name: DS.attr('string'),
  phone: DS.attr('string'),
  birthday: DS.attr('date'),

  address: DS.attr('string'),
  lat: DS.attr('string'),
  lng: DS.attr('string'),

  userServices: DS.hasMany('user-service'),
});
