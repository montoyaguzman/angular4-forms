import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [],
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  titleTemplate = 'Formulario TEMPLATE';

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(formularioTemp:NgForm) {
    console.log("Formulario", formularioTemp);
    console.log("Objeto", formularioTemp.value);
    console.log("Usuario", this.usuario);
  }

}
