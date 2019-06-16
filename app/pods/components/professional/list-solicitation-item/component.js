import Component from '@ember/component';
import moment from 'moment';

export default Component.extend({
  tagName: '',
  actions: {
    async status(value) {
      if (value) {
        this.set('solicitation.acceptedIn', moment().toDate());
        this.set('solicitation.status', 'Em andamento');
      } else {
        this.set('solicitation.status', 'Não aceito');
      }
      await this.get('solicitation').save();
    },
    async finished() {
      this.set('solicitation.status', 'Finalizado');
      await this.get('solicitation').save();
    }
  }
});
