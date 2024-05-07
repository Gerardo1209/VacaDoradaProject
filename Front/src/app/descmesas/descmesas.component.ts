import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Platillo {
  imagen: string;
  nombre: string;
  precio: number;
}



@Component({
  selector: 'app-descmesas',
  templateUrl: './descmesas.component.html',
  styleUrl: './descmesas.component.css'
})
export class DescmesasComponent {

  constructor(private http: HttpClient) { }

  platillos: any; // Platillos


  mesas: string[] = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5', 'Mesa 6','Mesa 7', 'Mesa 8'];
  mesaSeleccionada: string = '';
  pedido: Platillo[] = []; // Cambia el tipo de datos de pedido a un arreglo de objetos de tipo Platillo
  extras: string[] = [''];
  // Objeto que mapea el nombre de la mesa con la ruta del icono correspondiente
  mesaIconos: { [mesa: string]: string } = {
    'Mesa 1': '../../assets/img/2.png',
    'Mesa 2': '../../assets/img/3.png',
    'Mesa 3': '../../assets/img/4.png',
    'Mesa 4': '../../assets/img/5.png',
    'Mesa 5': '../../assets/img/6.png',
    'Mesa 6': '../../assets/img/7.png',
    'Mesa 7': '../../assets/img/7.png',
    'Mesa 8': '../../assets/img/7.png'
  };

  mostrarPedido(mesa: string) {
    this.mesaSeleccionada = mesa;
    // Asigna los objetos de platillos con sus propiedades imagen, nombre y precio
    this.pedido = [
      { imagen: '../../assets/img/grilled.jpg', nombre: 'Platillo 1', precio: 10 },
      { imagen: '../../assets/img/whiskey.jpg', nombre: 'Platillo 2', precio: 15 },
      { imagen: '../../assets/img/chocolate.jpg', nombre: 'Platillo 3', precio: 12 },
      { imagen: '../../assets/img/chocolate.jpg', nombre: 'Platillo 4', precio: 12 },
      { imagen: '../../assets/img/chocolate.jpg', nombre: 'Platillo 5', precio: 12 },
      { imagen: '../../assets/img/chocolate.jpg', nombre: 'Platillo 6', precio: 12 }
    ];
  }

  mostrarExtras(platillo: Platillo) {
    this.extras = ['Extra 1 para ' + platillo.nombre, 'Extra 2 para ' + platillo.nombre, 'Extra 3 para ' + platillo.nombre];
  }


  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/consulta/platillos').subscribe(data => {
      this.platillos = data; // Almacenamos los datos en la variable 'platillos'
    });

    console.log("Platillos de BD: ",this.platillos);
  }

}

@NgModule({
  declarations: [
    DescmesasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class DescmesasModule { }