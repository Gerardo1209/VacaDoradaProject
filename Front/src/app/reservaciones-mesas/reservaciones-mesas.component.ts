import { Component, OnInit } from '@angular/core';
import { MesaCardComponent } from '../mesa-card/mesa-card.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Mesa } from '../../interfaces';
import { ConnectionbdService } from '../service/connectionbd.service';

@Component({
  selector: 'app-reservaciones-mesas',
  standalone: true,
  imports: [MesaCardComponent, CommonModule],
  templateUrl: './reservaciones-mesas.component.html',
  styleUrl: './reservaciones-mesas.component.css',
  providers:[MesaCardComponent]
})
export class ReservacionesMesasComponent implements OnInit {

  mesas: Mesa[] = [];

  items: string[] = ['1', '2', '3', '4','5','6'];

  constructor(private http: HttpClient, private bd: ConnectionbdService) { }


  ngOnInit(): void {

    this.bd.getMesas().subscribe(
      (Response: Mesa[]) =>{
        this.mesas = Response
        console.log(this.mesas)
      }
    )


  }

  generarCodigoAleatorio(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
  
    for (let i = 0; i < 12; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indice);
    }
  
    return codigo;
  }

  /*
const codigoAleatorio = generarCodigoAleatorio();
console.log(codigoAleatorio); // Mostrará un código aleatorio de 12 dígitos que combina letras mayúsculas, minúsculas y números
  */


}

