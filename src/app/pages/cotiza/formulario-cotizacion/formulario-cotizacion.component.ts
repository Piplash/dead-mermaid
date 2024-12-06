import { Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-formulario-cotizacion",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./formulario-cotizacion.component.html",
  styleUrl: "./formulario-cotizacion.component.css",
})
export class FormularioCotizacionComponent {
  private readonly celular: number = 56963521554;
  tattooForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.tattooForm = this.fb.group({
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      estilo: ["", Validators.required],
      medidas: [null, [Validators.required, Validators.min(1)]],
      zonaCuerpo: ["", Validators.required],
    });
  }

  enviarFormulario() {
    if (this.tattooForm.valid) {
      const control = this.tattooForm.value;
      const nombre = control.nombre;
      const descripcion = control.descripcion;
      const estilo = control.estilo;
      const medidas = control.medidas;
      const zonaCuerpo = control.zonaCuerpo;
      const mensaje = `Hola,%20soy%20${nombre}%20y%20me%20gustaría%20cotizar%20:)%0A-Estilo:%20${estilo}%0A-Medidas:%20${medidas}%20cm%0A-Zona:%20${zonaCuerpo}%0A-Descripción:%20${descripcion}`;
      window.open(`https://wa.me/${this.celular}?text=${mensaje}`, "_blank");
    } else {
      console.log("Formulario inválido");
    }
  }
}
