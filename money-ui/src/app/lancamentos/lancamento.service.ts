import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Lancamento } from '../core/model';
import * as moment from 'moment';

export class LancamentoFiltro {
  descricao?: string;
  dataVencimentoInicio?: Date;
  dataVencimentoFim?: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {



  lancamentosUrl = 'http://localhost:8080/lancamentos/';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic dGhpYWdvLnNpbC5yaWNhcmRvQGdtYWlsLmNvbTphZG1pbg==');

      let params = new HttpParams();

      params = params.set('page', filtro.pagina);
      params = params.set('size', filtro.itensPorPagina);



    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if(filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe',
      moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'))
    }

    if(filtro.dataVencimentoFim) {
      params = params.set('dataVencimentoAte',
      moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'))
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, { headers, params })
      .toPromise()
      .then((response: any)=> {
        const lancamentos = response['content'];

        const resultado = {
          lancamentos,
          total: response['totalElements']
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic dGhpYWdvLnNpbC5yaWNhcmRvQGdtYWlsLmNvbTphZG1pbg==');

      return this.http.delete(`${this.lancamentosUrl}/${codigo}`, { headers })
      .toPromise()
      .then( () => null);
  }

  adicionar(lancamento: Lancamento): Promise<Lancamento | any>{
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic dGhpYWdvLnNpbC5yaWNhcmRvQGdtYWlsLmNvbTphZG1pbg==')
    .append('Content-Type', 'application/json');

    return this.http.post<Lancamento>(this.lancamentosUrl, lancamento, { headers })
    .toPromise();

  }

}
