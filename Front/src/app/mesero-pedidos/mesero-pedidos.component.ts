import { MeseroPedidosComponent } from './mesero-pedidos.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'; // import MatTableDataSource here

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
  standalone: true,
  imports: [RouterOutlet, MatTableModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  dataSource = new MatTableDataSource(this.orders);
}
