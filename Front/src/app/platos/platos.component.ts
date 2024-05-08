
import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent {
  @Output() orderPlaced = new EventEmitter<string>(); // Emite un evento cuando se realiza un pedido

  constructor(private appComponent: AppComponent) {} // Inyecta AppComponent

  placeOrder(plato: string) {
    this.orderPlaced.emit(plato); // Emite un evento con el nombre del plato
    this.appComponent.addOrder(plato); // Llama al método addOrder del componente AppComponent
  }
}
