import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Order {
  tableNumber: number;
  status: string;
  items: {
    dish: string;
    details: string;
    status: string;
    price: string;
  }[];
}

@Component({
  selector: 'app-root',
  templateUrl: './mesero-pedidos.component.html',
  styleUrls: ['./mesero-pedidos.component.css']
})
export class MeseroPedidosComponent {
  orders: Order[] = [
    {
      tableNumber: 1,
      status: 'Pedido terminado',
      items: [
        {
          dish: 'Coctel de Bourbon Old',
          details: '',
          status: 'Entregado',
          price: '$60'
        },
        {
          dish: 'Mousse de chocolate',
          details: '',
          status: 'Entregado',
          price: '$60'
        }
      ]
    },
    // Add the remaining orders here
  ];

  displayedColumns: string[] = ['tableNumber', 'status', 'items'];
  //dataSource = new MatTableDataSource(this.orders);
}

@NgModule({
  declarations: [
    MeseroPedidosComponent
  ],
  imports: [
    RouterOutlet, // Agrega CommonModule aquí
    CommonModule,
  
  ],
  exports: [
    MeseroPedidosComponent
  ]
})
export class FormplatModule { }
