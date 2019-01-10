import Service from '@ember/service';

export default Service.extend({
  isLoading: false,
  change() {
    this.toggleProperty('isLoading');
  }
});
