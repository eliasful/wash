import Component from '@ember/component';
import { inject as service } from "@ember/service";
import $ from 'jquery';
import Swal from 'sweetalert2';

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
      this.set('model.address', $("#address-field").val());
      this.get('model').save().then(() => {
        if (this.get('notTransition')) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Cadastro salvo com sucesso!'
          });
          return;
        }
        this.get('router').transitionTo('home');
      });
    }
  }
});
