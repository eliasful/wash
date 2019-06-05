import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  username: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  name: DS.attr('string'),
  phone: DS.attr('string'),
  birthday: DS.attr('date'),
  document: DS.attr('string'),

  address: DS.attr('string'),
  number: DS.attr('string'),
  neighborhood: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  lat: DS.attr('string'),
  lng: DS.attr('string'),

  validations: {
    'username': {
      presence: true,
      length: { minimum: 6 },
      message: 'must be letters and numbers only'
    },
    'email': {
      presence: true
    },
    'password': {
      presence: true,
      length: { minimum: 8 }
    }
  }
});
