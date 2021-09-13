import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /* TODO:  este codigo es con Two way binding */

  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona() {
   let persona1 = new Persona(this.nombreInput, this.apellidoInput);
   // this.personas.push(persona1);
   // this.personaCreada.emit(persona1);
   this.personasService.agregarPersona(persona1);
   this.nombreInput = '';
   this.apellidoInput = '';
  }

  /* Esta funcion es con referencia directa
  agregarPersona(nomInput: HTMLInputElement, apeInput: HTMLInputElement) {
    let persona1 = new Persona(nomInput.value, apeInput.value);
    // this.personas.push(persona1);
    this.personaCreada.emit(persona1);
  } */

  constructor(private loggingService: LoggingService,
    private personasService: PersonasService) {
      this.personasService.saludar.subscribe(
        (indice: number) => alert("El indice es = " + indice)
      );
    }

  ngOnInit() {

  }

  /* @ViewChild('nomInput') nomInput: ElementRef;
  @ViewChild('apeInput') apeInput: ElementRef;

  onAgregarPersona() {
    let persona1 = new Persona(this.nomInput.nativeElement.value, this.apeInput.nativeElement.value);
    this.loggingService.enviarMesajeAConsola("Enviamos persona: " + JSON.stringify(persona1));
    // this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  } */
}
