import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input() menu: Array<string>;
  @Output() nomeClicado = new EventEmitter;

  constructor() { }

  ngOnInit() { }

  enviarNome(nome: string)
  {
    event.preventDefault();
    this.nomeClicado.emit(nome);
  }

}
