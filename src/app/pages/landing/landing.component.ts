import { Component } from "@angular/core";
import { PreloaderComponent } from "../../components/preloader/preloader.component";
import { AboutComponent } from "./about/about.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";

@Component({
  selector: "app-landing",
  standalone: true,
  imports: [PreloaderComponent, AboutComponent, PortafolioComponent],
  templateUrl: "./landing.component.html",
  styleUrl: "./landing.component.css",
})
export default class LandingComponent {
  public scrollTo(seccion: any) {
    console.log(seccion);
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
