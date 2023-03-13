import { Component } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number ;
  destino: number ;

constructor(private service: TransferenciaService){

}

  transferir() {
    // console.log('valor:', this.valor)
    // console.log('destino:', this.destino)
    const valoresEnviados: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionarNovaTransf(valoresEnviados).subscribe(result => {
      console.log(result)
      this.limpar()
    },
    (error) => console.error(error))

  }

  limpar(){
    this.valor = 0
    this.destino = 0
  }
}
