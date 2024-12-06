import { Component } from "@angular/core";
import { PreloaderComponent } from "../../components/preloader/preloader.component";
import { FormularioCotizacionComponent } from "./formulario-cotizacion/formulario-cotizacion.component";

@Component({
  selector: "app-cotiza",
  standalone: true,
  imports: [PreloaderComponent, FormularioCotizacionComponent],
  templateUrl: "./cotiza.component.html",
  styleUrl: "./cotiza.component.css",
})
export default class CotizaComponent {
  public scrollTo(seccion: any) {
    console.log(seccion);
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
