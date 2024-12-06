import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  public faInstagram = faInstagram;
  public faTiktok = faTiktok;
  public faWhatsapp = faWhatsapp;
  public faFacebook = faFacebook;
}
