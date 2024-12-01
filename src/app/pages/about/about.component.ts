import { Component, Input } from "@angular/core";
import { PortafolioComponent } from "../portafolio/portafolio.component";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [PortafolioComponent],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  @Input() portafolio!: any;

  public scrollTo(seccion: any) {
    console.log(seccion);
    this.portafolio?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
