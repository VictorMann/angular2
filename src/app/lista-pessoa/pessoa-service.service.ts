import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  constructor() { }
  
  getPessoas(): string [] 
  {
    return ['João', 'Thiago', 'Angular 2', 'Thamires'];
  }
}
