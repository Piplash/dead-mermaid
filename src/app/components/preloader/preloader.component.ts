import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent {
  ngOnInit() {
    this.removePreloader();
}

ngAfterViewInit() {
  const transitionLayer = document.querySelector('.cd-transition-layer');
  const bgLayer = document.querySelector('.bg-layer');
  
  if (transitionLayer && bgLayer) {
    // Inicializa la transición de entrada para la capa de fondo
    transitionLayer.classList.add('visible');
    transitionLayer.classList.add('opening');
  }
}

removePreloader() {
  const preloader = document.getElementById('preloader');
  const transitionLayer = document.querySelector('.cd-transition-layer');
  
  if (transitionLayer) {
    // Inicia la transición de cierre
    transitionLayer.classList.remove('opening');
    transitionLayer.classList.add('closing');
  }

  // Después de un tiempo para que termine la animación de cierre, elimina el preloader
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000);  // Tiempo de espera para asegurar que la animación se complete
  }
}

}
