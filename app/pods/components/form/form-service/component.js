import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  loading: service(),
  actions: {
    search(model) {
      this.get('loading').change();
      setTimeout(() => {
        this.get('loading').change();
      }, 1000);
    }
  }
});
