import { Component, OnInit } from '@angular/core';
import { MeuLogService } from './meu-log.service';
import { NomeTecService } from './nome-tec.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [MeuLogService, NomeTecService]
})
export class DiComponent implements OnInit {

  tecnologias: Array<string>;

  constructor(private nomeTec: NomeTecService)
  {
    this.tecnologias = this.nomeTec.getNomesTec();
  }

  ngOnInit() {}
}
