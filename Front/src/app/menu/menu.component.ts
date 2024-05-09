import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title = 'Menu';
  orderCount = 0; // Contador de órdenes
  orders: string[] = [];

  increaseOrderCount() {
    this.orderCount++;
  }

  placeOrder(plato: string) {
    // Aquí puedes agregar la lógica para registrar el pedido
    // Por ahora, solo aumentaremos el contador de órdenes
    this.increaseOrderCount();
  }

  orderCountArray() {
    return Array(this.orderCount).fill(0).map((x, i) => i + 1);
  }

  addOrder(order: string) {
    this.orders.push(order);
  }

  // Función para ordenar los elementos de la comanda
  orderItems() {
    // Aquí puedes agregar la lógica para ordenar los elementos de la comanda
    // Por ahora, vamos a simular que se ordenan los elementos de la comanda
    this.orders.sort(); // Ordenamos alfabéticamente
  }

  // Función para pagar
  pay() {
    // Aquí puedes agregar la lógica para pagar
    // Por ahora, vamos a mostrar un mensaje en la consola
    console.log('¡Gracias por su compra!');
  }
}

@NgModule({
  declarations: [
    // Your component declarations
  ],
  imports: [
    CommonModule, // Import CommonModule here
    // Other module imports
  ],
  // Other metadata
})
export class MenuModule { }