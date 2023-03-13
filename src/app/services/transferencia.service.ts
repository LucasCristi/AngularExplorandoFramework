import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.models';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: any[] = [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {}

  get transferencias() {
    return this.listaTransferencias;
  }

  todasAsTransferencias(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionarNovaTransf(transferencia: Transferencia): Observable<Transferencia> {
    this.tratarDados(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private tratarDados(transferencia: any) {
    transferencia.data = new Date();
  }
}
