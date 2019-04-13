import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('length', {
      min: 4,
      max: 8
    })
  ],
  name: [
    validator('presence', true),
  ],
  phone: [
    validator('presence', true),
    validator('format', {
      allowBlank: true,
      type: 'phone'
    })
  ],
  birthday: [
    validator('date', {
      before: 'now',
      precision: 'day',
      format: 'DD/MM/YYY',
      errorFormat: 'DD/MM/YYYY'
    })
  ],
  document: [
    validator('format', {
      regex: /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
      message: 'CPF inválido'
    })
  ]
});

export default DS.Model.extend(Validations, {
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
  lng: DS.attr('string')
});
