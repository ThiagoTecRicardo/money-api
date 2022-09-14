import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/pessoas/pessoa.service';



import { CategoriaService } from '../../categorias/categoria.service';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias: any[] = [];

  pessoas: any[] =  [];

  constructor(
    private categoriaService: CategoriaService,
    private erroHandler: ErrorHandlerService,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {

    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias(){
    return this.categoriaService.listarTodas()
    .then( categorias => {
      this.categorias = categorias.map((c: any) => ({ label: c.nome, value: c.codigo }));
     })
    .catch(erro => this.erroHandler.handle(erro));
  }

  carregarPessoas(){
    return this.pessoaService.listarTodas()
    .then( pessoas => {
      this.pessoas = pessoas.map( (p: any) => ({ label: p.nome, value: p.codigo }));
    })
    .catch(erro => this.erroHandler.handle(erro));
  }

}
