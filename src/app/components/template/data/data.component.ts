import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [],
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  titleData = 'Formulario Data';
  formulario: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: "andy",
      apellido: "leon"
    },
    correo: "andrea@hotmail.com"
  };

  constructor() {
    console.log(this.usuario);

    this.formulario = new FormGroup({
      'nombreCompleto' : new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(5)
        ]),
        'apellido': new FormControl('', Validators.required)
      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}")
      ]),
    });
    
  }

  ngOnInit() {

  }

  registrar() {
    console.log("Formulario", this.formulario.value);
  }

}
