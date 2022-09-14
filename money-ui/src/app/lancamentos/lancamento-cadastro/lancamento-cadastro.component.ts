import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { MessageService } from 'primeng/api';


import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Lancamento } from '../../core/model';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  categorias: any[] = [];

  pessoas: any[] =  [];

  lancamento = new Lancamento();

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];


  constructor(
    private categoriaService: CategoriaService,
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private erroHandler: ErrorHandlerService,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {

    this.carregarCategorias();
    this.carregarPessoas();
  }

  salvar(form: NgForm) {
    this.lancamentoService.adicionar(this.lancamento)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' });

        form.reset();
        this.lancamento = new Lancamento();
      })
      .catch(erro => this.erroHandler.handle(erro));
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
