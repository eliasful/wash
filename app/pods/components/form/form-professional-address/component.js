import Component from '@ember/component';
import { inject as service } from "@ember/service";
import $ from 'jquery';

export default Component.extend({
  router: service(),
  didInsertElement() {
    $("#address-field").geocomplete({details:"form"}).bind("geocode:result", (event, result) => {
      this.set('model.lng', result.geometry.location.lng());
      this.set('model.lat', result.geometry.location.lat());
    });
  },
  actions: {
    submit() {
      this.get('model').save().then(() => {
        this.get('router').transitionTo('home');
      });
    }
  }
});
