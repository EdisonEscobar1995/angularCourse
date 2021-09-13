import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: [
    './personas.component.css'
  ]
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = 'No se ha agregad ninguna persona';
  titulo = 'Ingeniero';
  mostrar = false;

  agregarPersona() {
    this.mensaje = 'Persona agregada';
    this.deshabilitar = true;
    this.mostrar = true;
  }

  /* modificarTitulo(event: Event) {
    this.titulo = (<HTMLInputElement>event.target).value;
  } */

}
