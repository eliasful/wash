import Service from '@ember/service';

export default Service.extend({
  isLoading: false,
  change(value = false) {
    this.set('isLoading', value);
  }
});
