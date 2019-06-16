import Component from '@ember/component';
import moment from 'moment';
import swal from 'sweetalert';

export default Component.extend({
  tagName: '',
  rating: null,
  actions: {
    async status(value) {
      if (value) {
        this.set('solicitation.acceptedIn', moment().toDate());
        this.set('solicitation.status', 'Em andamento');
        const estimatedTime = await swal({
          title: "Em quantas horas esse serviço ficará pronto?",
          content: {
            element: "input",
            attributes: {
              placeholder: "ex: 2",
              type: "number",
            }
          },
        });
        this.set('solicitation.estimatedTime', estimatedTime);
      } else {
        this.set('solicitation.status', 'Não aceito');
      }
      await this.get('solicitation').save();
    },
    async finished() {
      this.set('solicitation.status', 'Finalizado');
      await this.get('solicitation').save();
    },
    async avaliation(rating) {
      this.set('solicitation.ratingOwner', rating);
      await this.get('solicitation').save();
    }
  }
});
