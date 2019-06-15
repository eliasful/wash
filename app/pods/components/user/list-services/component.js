import Component from '@ember/component';
import { sort } from '@ember/object/computed';

export default Component.extend({
  sorting: ['distance:desc'],
  servicesSort: sort('model.services', 'sorting')
});
