import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  cargarPersonas() {
    return this.httpClient.get('https://listado-personas-5f51b-default-rtdb.firebaseio.com/datos.json');
  }

  // Guardar personas
  guardarPersonas(personas: Persona[]): void {
    this.httpClient.put('https://listado-personas-5f51b-default-rtdb.firebaseio.com/datos.json', personas)
    .subscribe(
      response => {
        console.log("Resultado de guardar personas = ", response);
      },
      error => console.error("Error al guardar personas = ", error)
    );
  }

  modificarPersona(index: number, personas: Persona) {
    let url:string;
    url = `https://listado-personas-5f51b-default-rtdb.firebaseio.com/datos/${index}.json`;
    this.httpClient.put(url, personas)
      .subscribe(
        response => console.log("response modificacion Persona = ", response),
        error => console.log("error modificacion Persona = ", error)
      );
  }

  eliminarPersona(index: number) {
    let url:string;
    url = `https://listado-personas-5f51b-default-rtdb.firebaseio.com/datos/${index}.json`;
    this.httpClient.delete(url)
      .subscribe(
        response => console.log("response eliminar Persona = ", response),
        error => console.log("error eliminar Persona = ", error)
      );
  }
}
