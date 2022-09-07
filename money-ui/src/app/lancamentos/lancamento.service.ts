import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {

    const headers = new HttpHeaders()

      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');



    return this.http.get(`${this.lancamentosUrl}?resumo`, { headers })

      .toPromise()

      .then((response : any) => response['content']);

  }

}
function append(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}

