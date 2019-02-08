import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  private nomes : string [] = ['João', 'Thiago', 'Angular 2', 'Thamires', 'Debora'];

  constructor() { }
  
  getPessoas(): string [] 
  {
    return this.nomes;
  }

  setPessoa(nome: string): void
  {
    this.nomes.push(nome);
  }
}
