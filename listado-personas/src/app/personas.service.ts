import { Injectable, EventEmitter } from "@angular/core";
import { DataServices } from "./data.services";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {
  personas: Persona[] = [];

  saludar = new EventEmitter<number>();

  constructor(
    private loggingService: LoggingService,
    private dataServices: DataServices
  ) {}

  setPersonas(personas: Persona[]) {
    this.personas = personas || [];
  }

  obtenerPersonas() {
    return this.dataServices.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.loggingService.enviarMesajeAConsola("Agregamos persona: " + persona.nombre);
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number): Persona {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona): void {
    let persona1: Persona = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona);
  }

  eliminarPersona(index: number): void {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    // Se vuelve a guardar el arreglo para rehacer los indices
    this.modificarPersonas();
  }

  modificarPersonas(): void {
    if (this.personas != null) {
      this.dataServices.guardarPersonas(this.personas);
    }
  }
}
