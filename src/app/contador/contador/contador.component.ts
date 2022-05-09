import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>
      {{ title }}
      <h1>
        <h3>
          La base es <strong>{{ base }}</strong>
        </h3>
        <button (click)="acumular(base)">+{{ base }}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)">-{{ base }}</button>
      </h1>
    </h1>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador App';
  numero: number = 10;
  base: number = 10;
  //base = 5

  acumular(valor: number) {
    this.numero += valor;
  }
}
