import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterModule, NavComponent, FooterComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
