import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent {
  @Output() orderPlaced = new EventEmitter<string>(); // Emite un evento cuando se realiza un pedido

  constructor(private appComponent: AppComponent) {} // Inyecta AppComponent

  placeOrder(bebidas: string) {
    this.orderPlaced.emit(bebidas); // Emite un evento con el nombre de la beida
    this.appComponent.addOrder(bebidas); // Llama al método addOrder del componente AppComponent
  }
}


