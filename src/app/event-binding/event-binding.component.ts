import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorDigitado: string = '';
  valorTemplate: string = '';
  senha: string = '';
  habilitarBotao: boolean = false;
  conteudo: Array<string> = [];
  idade: number;

  constructor() { }

  ngOnInit() { }

  meuClick(id: string, data: string): void
  {
    console.log(arguments);
    this.valorDigitado = 'Clicado!';
  }

  digitou(event): void
  {
    console.log(event);
    this.valorDigitado = event.target.value;
  }

  digitouValorTemplate(valor: string): void
  {
    this.valorTemplate = valor;
  }

  pegaSenha(senha: string): void
  {
    this.senha = senha;
    this.habilitarBotao = senha.length >= 6;
  }

  gravarSenha(): void
  {
    // exibe apenas os 3 últimos dígitos
    let senhaOculta: string = this.senha.slice(0, -3).replace(/[\s\S]/g, '*') 
                            + this.senha.slice(-3);
    alert(`Senha: ${senhaOculta} \n\ngravada com sucesso!`);
  }

  adicionarConteudo(valor: string): void
  {
    valor.trim() &&
    this.conteudo.push(valor);
  }

  verIdade(idade: string): void
  {
    let now = new Date().getFullYear();
    this.idade = now - parseInt(idade);
  }

}
