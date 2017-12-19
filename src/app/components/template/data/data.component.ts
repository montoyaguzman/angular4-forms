import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [],
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  titleData = 'Formulario Data';
  formulario: FormGroup;

  usuario: any = {
    nombreCompleto: {
      nombre: "andy",
      apellido: "leon"
    },
    correo: "andrea@hotmail.com"
    // pasatiempos: ["Ver series", "Leer", "Correr"]
  };

  constructor() {
    console.log(this.usuario);

    this.formulario = new FormGroup({
      'nombreCompleto' : new FormGroup({
        // 'nombre': new FormControl(this.usuario.nombreCompleto.nombre, [
        'nombre': new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(5)
                                      ]),
        'apellido': new FormControl('', [
                                          Validators.required,
                                          this.apellidoProhibido
                                        ])
      }),
      'correo': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}")
                                    ]),
      // 'pasatiempos': new FormArray([])
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    // this.formulario.setValue(this.usuario);

  }

  ngOnInit() {

  }

  registrar() {
    console.log("Formulario", this.formulario.value);

    this.formulario.reset({
      nombreCompleto: {
        nombre: "",
        apellido: ""
      },
      correo: ""
    });
    // this.formulario.controls['correo'].setValue("nuevocorreo@servidor.com")

    this.formulario.controls['password2'].setValidators([
      Validators.required,
      this.passwordDiferente
    ])

  }

  apellidoProhibido(control: FormControl): {[s: string]:boolean} {
    if (control.value === "bobo") {
      return {apellidoProhibido: true}
    }
    return null;
  }

  passwordDiferente(control: FormControl): {[s: string]:boolean} {
    if (control.value !== this.formulario.controls['password1'].value) {
      return {passwordDiferente: true}
    }
    return null;
  }


}
