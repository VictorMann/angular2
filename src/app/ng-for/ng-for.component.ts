import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nomes: Array<string> = ['Leticia', 'Melissa', 'Pamela', 'Andreia'];
  inverterNomes: boolean = false;

  constructor() { }

  ngOnInit() { }

  sort()
  {
    this.nomes.sort((a, b): number => {
      let x: string = a.toLowerCase();
      let y: string = b.toLowerCase();
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

}
