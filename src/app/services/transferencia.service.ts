import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: any[] = [];

  constructor() {}

  get transferencias() {
    return this.listaTransferencias;
  }

  adicionarNovaTransf(transferencia: any) {
    this.tratarDados(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  private tratarDados(transferencia: any) {
    transferencia.data = new Date()
  }
}
