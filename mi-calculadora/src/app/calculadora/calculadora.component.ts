import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  title = 'Aplicación de calculadora';
  resultado: number;

  resultadoSuma(resultado: number) {
    this.resultado = resultado;
  }
}
