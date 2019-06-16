import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('user'),
  userService: DS.belongsTo('user-service'),
  observation: DS.attr('string'),
  quantity: DS.attr('number')
});
