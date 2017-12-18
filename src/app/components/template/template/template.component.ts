import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [],
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  titleTemplate = 'Formulario template';

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: null,
    sexo: null,
    aceptaTerminos: false
  }

  paises = [
    {
      codigo: "MX",
      nombre: "Mexico"
    },
    {
      codigo: "ES",
      nombre: "España"
    },
    {
      codigo: "EUA",
      nombre: "Estados Unidos"
    }
];

  constructor() { }

  ngOnInit() {
  }

  guardar(formularioTemp:NgForm) {
    console.log("Formulario", formularioTemp);
    console.log("Objeto", formularioTemp.value);
    console.log("Usuario", this.usuario);
  }

}
