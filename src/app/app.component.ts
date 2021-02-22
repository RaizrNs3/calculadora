import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora con Angular.';
  operadorA = 0;
  operadorB = 0;
  resultado = 0;

  suma(): void{
    this.resultado = 0;
    this.resultado = this.operadorA + this.operadorB;
  }

}
