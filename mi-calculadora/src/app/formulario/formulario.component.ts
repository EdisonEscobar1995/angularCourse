import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() resultadoOperacion = new EventEmitter<number>();
  operandoA: number;
  operandoB: number;

  sumar(): void {
    // this.resultado = this.operandoA + this.operandoB;
    this.resultadoOperacion.emit(this.operandoA + this.operandoB);
  }

}
