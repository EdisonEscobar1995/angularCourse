import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.services';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {}

  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-5f51b-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  // Guardar personas
  guardarPersonas(personas: Persona[]): void {
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://listado-personas-5f51b-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas)
    .subscribe(
      response => {
        console.log("Resultado de guardar personas = ", response);
      },
      error => console.error("Error al guardar personas = ", error)
    );
  }

  modificarPersona(index: number, personas: Persona) {
    const token = this.loginService.getIdToken();
    let url:string;
    url = `https://listado-personas-5f51b-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    this.httpClient.put(url, personas)
      .subscribe(
        response => console.log("response modificacion Persona = ", response),
        error => console.log("error modificacion Persona = ", error)
      );
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url:string;
    url = `https://listado-personas-5f51b-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    this.httpClient.delete(url)
      .subscribe(
        response => console.log("response eliminar Persona = ", response),
        error => console.log("error eliminar Persona = ", error)
      );
  }
}
