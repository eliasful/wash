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
  updatedAt: DS.attr('date'),
  ratingOwner: DS.attr('number'),
  ratingProfessional: DS.attr('number'),

  timeLeft: computed('estimatedTime', 'acceptedIn', function () {
    const acceptedIn = this.get('acceptedIn');
    if (!acceptedIn) {
      return;
    }
    const mAcceptedIn = moment(acceptedIn);
    const mEstimatedTime = moment(acceptedIn).add(this.get('estimatedTime'), 'hour').toDate();
    return moment(mEstimatedTime).diff(mAcceptedIn, 'hours');
  })
});
