import { Component, OnInit } from '@angular/core';
import { NomeTecService } from './nome-tec.service';
import { AlertaService } from '../alerta.service';
import { MeuLogService } from './meu-log.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [MeuLogService, NomeTecService]
})
export class DiComponent implements OnInit {

  tecnologias: Array<string>;

  constructor(private nomeTec: NomeTecService, private meuAlerta: AlertaService)
  {
    this.tecnologias = this.nomeTec.getNomesTec();
    this.meuAlerta.msgAlerta();
  }

  ngOnInit() {}
}
