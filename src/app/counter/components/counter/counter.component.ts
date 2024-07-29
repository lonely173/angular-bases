import { Component, OnInit } from '@angular/core';
// import { CounterComponent } from './counter.component';
// a-component para que cree rapido
@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>`,
})

export class CounterComponent  {
  constructor() { }
  public counter: number = 10;

  increaseBy(value: number): void { //metodo
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
  // ngOnInit() { }
}
