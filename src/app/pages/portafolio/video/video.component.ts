import { Component, OnInit } from "@angular/core";

interface Imagen {
  src: string; // URL de la imagen
  descripcion: string; // Descripción de la imagen
}

@Component({
  selector: "app-video",
  standalone: true,
  imports: [],
  templateUrl: "./video.component.html",
  styleUrl: "./video.component.css",
})
export class VideoComponent implements OnInit {
  public imagenes: Imagen[] = []; // Este será tu arreglo de imágenes
  public imagenesPorPagina = 16; // 4x4 imágenes por página
  public filas: Imagen[][] = [];
  public selectedImage: string = ""; // Image to show in full screen

  ngOnInit(): void {
    this.imagenes = this.obtenerPortafolio(); // Llenar el arreglo con las imágenes
    this.crearFilas(); // Crear las filas con 4 imágenes por cada una
  }

  public obtenerPortafolio() {
    // Aquí puedes llenar las imágenes con tu lógica, por ahora son ejemplos
    return [
      { src: "1.jpg", descripcion: "Descripción 1" },
      { src: "2.jpg", descripcion: "Descripción 2" },
      { src: "3.jpg", descripcion: "Descripción 3" },
      { src: "4.jpg", descripcion: "Descripción 4" },
      { src: "5.jpg", descripcion: "Descripción 5" },
      { src: "6.jpg", descripcion: "Descripción 6" },
      { src: "7.jpg", descripcion: "Descripción 7" },
      { src: "8.jpg", descripcion: "Descripción 8" },
      { src: "9.jpg", descripcion: "Descripción 9" },
    ];
  }

  public crearFilas() {
    // Crear un arreglo de filas con 4 imágenes por fila
    this.filas = [];
    for (let i = 0; i < this.imagenes.length; i += 4) {
      this.filas.push(this.imagenes.slice(i, i + 4));
    }
  }

  detalleImagen(imagen: any): void {
    console.log(imagen);
    this.selectedImage = imagen; // Set the selected image
  }

  closeFullScreen(): void {
    this.selectedImage = ""; // Close the full screen view
  }
}
