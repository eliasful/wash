import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  service: DS.belongsTo('service-type'),
  price: DS.attr('number')
});
