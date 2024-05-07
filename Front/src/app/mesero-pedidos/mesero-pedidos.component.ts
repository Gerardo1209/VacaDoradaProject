import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  standalone: true,
  imports: [RouterOutlet, CommonModule],
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
  //dataSource = new MatTableDataSource(this.orders);
}
