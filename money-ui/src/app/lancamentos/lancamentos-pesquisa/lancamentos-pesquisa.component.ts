import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';


@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit{

  totalRegistro = 0;
  filtro = new LancamentoFiltro();
  lancamentos: any[] = [];

  constructor(private lancamentoService: LancamentoService){}

  ngOnInit(): void {
    //this.pesquisar();
  }

  pesquisar(pagina = 0) {

    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistro = resultado.total;
        this.lancamentos = resultado.lancamentos;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first! / event.rows!;
    this.pesquisar(pagina);
  }

}
