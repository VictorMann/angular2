import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contato('Ted Browks', '(11) 98765-4321', 'email@emai.com');

  constructor() { }

  ngOnInit() {}

  enviarDados()
  {
    console.log(`seu nome é: ${this.contato.nome}`);
    console.log(`seu telefone é: ${this.contato.telefone}`);
    console.log(`seu email é: ${this.contato.email}`);
  }

}
