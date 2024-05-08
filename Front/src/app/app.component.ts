import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
pay() {
throw new Error('Method not implemented.');
}
orderItems() {
throw new Error('Method not implemented.');
}
  addOrder(plato: string) {
    throw new Error('Method not implemented.');
  }
  title = 'VacaDoradaProject';



  constructor(){
    localStorage.setItem('Rol', ' ');
  }
}
