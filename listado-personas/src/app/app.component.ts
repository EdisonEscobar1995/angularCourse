import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor() {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBvELleQKgv8gvDsz_7NMWWWxLnMIPoQss",
      authDomain: "listado-personas-5f51b.firebaseapp.com",
    });
  }

}
