import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent {
  @Output() orderPlaced = new EventEmitter<string>(); // Emite un evento cuando se realiza un pedido

  constructor(private appComponent: AppComponent) {} // Inyecta AppComponent

  placeOrder(postres: string) {
    this.orderPlaced.emit(postres); // Emite un evento con el nombre del plato
    this.appComponent.addOrder(postres); // Llama al método addOrder del componente AppComponent
  }
}


