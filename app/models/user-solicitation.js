import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

export default DS.Model.extend({
  owner: DS.belongsTo('user'),
  userService: DS.belongsTo('user-service'),
  observation: DS.attr('string'),
  quantity: DS.attr('number'),
  status: DS.attr('string'),
  estimatedTime: DS.attr('number'),
  acceptedIn: DS.attr('date'),

  timeLeft: computed('estimatedTime', 'acceptedIn', function () {
    const estimatedTime = moment().add(this.get('estimatedTime'), 'hour');
    const acceptedIn = moment(this.get('acceptedIn'));
    return estimatedTime.diff(acceptedIn, 'H');
  })
});
