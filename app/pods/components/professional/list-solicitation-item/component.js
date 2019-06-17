import Component from '@ember/component';
import moment from 'moment';
import Swal from 'sweetalert2';

export default Component.extend({
  tagName: '',
  rating: null,
  actions: {
    async status(value) {
      if (value) {
        this.set('solicitation.acceptedIn', moment().toDate());
        this.set('solicitation.status', 'Em andamento');
        const {value: estimatedTime} = await Swal.fire({
          title: 'Em quantas horas esse serviço ficará pronto?',
          input: 'number',
          showCancelButton: false,
          inputValidator: (value) => {
            if (!value) {
              return 'Você precisa informar o tempo estimado!'
            }
          }
        })

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
