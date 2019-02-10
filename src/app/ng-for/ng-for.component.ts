import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nomes: Array<any> = [
    {id: 1, nome: 'Naomi'},
    {id: 2, nome: 'Carolina'},
    {id: 3, nome: 'Elisa'},
    {id: 4, nome: 'Manuela'},
  ];
  inverterNomes: boolean = false;

  constructor() { }

  ngOnInit() { }

  sort()
  {
    this.nomes.sort((a, b): number => {
      let x: string = a.nome.toLowerCase();
      let y: string = b.nome.toLowerCase();
      if (x == y) return 0;
      return (x > y) ? 1 : -1;
    });
  }

  ordenar(): void
  {
    if (this.inverterNomes) this.nomes.reverse();
    else this.sort();
    this.inverterNomes = !this.inverterNomes;
  }

  meuSave(index: number, nomes: any)
  {
    return nomes.id;
  }

  atualizar(): void
  {
    this.nomes = [
      {id: 1, nome: 'Naomi'},
      {id: 2, nome: 'Carolina'},
      {id: 3, nome: 'Elisa'},
      {id: 4, nome: 'Manuela'},
      {id: 5, nome: 'Maju'},
    ];
  }
}
