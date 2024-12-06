import { Component } from "@angular/core";
import { FotosComponent } from "./fotos/fotos.component";
import { VideoComponent } from "./video/video.component";
import { PreloaderComponent } from "../../components/preloader/preloader.component";

@Component({
  selector: "app-portafolio",
  standalone: true,
  imports: [FotosComponent, VideoComponent, PreloaderComponent],
  templateUrl: "./portafolio.component.html",
  styleUrl: "./portafolio.component.css",
})
export default class PortafolioComponent {}
