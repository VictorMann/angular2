import { Injectable } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable()
export class NomeTecService {

  constructor(private meuLog: MeuLogService) {}

  getNomesTec(): Array<string>
  {
    this.meuLog.setLog('consultou o array de tecnologias');

    return [
      'Angular 2',
      'javascript',
      'sass',
      'css3'
    ];
  }
}
