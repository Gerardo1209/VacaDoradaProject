import { Component, OnInit } from '@angular/core';
import { MesaCardComponent } from '../mesa-card/mesa-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservaciones-mesas',
  standalone: true,
  imports: [MesaCardComponent, CommonModule],
  templateUrl: './reservaciones-mesas.component.html',
  styleUrl: './reservaciones-mesas.component.css'
})
export class ReservacionesMesasComponent implements OnInit {
  array:number[] = [1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
    console.log(this.array)
  }
}