import { Component, Input } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [],
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
