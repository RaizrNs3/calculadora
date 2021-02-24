import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  operadorA = 0;
  operadorB = 0;
  @Output() resultado = new EventEmitter<number>();

  suma(): void{
    this.resultado.emit(this.operadorA + this.operadorB);
  }
}
