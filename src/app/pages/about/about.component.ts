import { Component } from "@angular/core";
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";
import { RandomComponent } from "./random/random.component";
import { PreloaderComponent } from "../../components/preloader/preloader.component";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [SobreMiComponent, RandomComponent, PreloaderComponent],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export default class AboutComponent {}
