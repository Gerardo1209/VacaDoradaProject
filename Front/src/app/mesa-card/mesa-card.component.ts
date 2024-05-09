import { Component, Input } from '@angular/core';
import { Mesa } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-mesa-card',
  standalone: true,
  templateUrl: './mesa-card.component.html',
  styleUrl: './mesa-card.component.css',
  providers: [CommonModule]
})
export class MesaCardComponent {

  constructor(private router: Router) { }

@Input() mesa: Mesa|undefined;


generaCodigo(){
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let codigo = '';

  for (let i = 0; i < 12; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indice);
  }
  console.log("Codigo: " +codigo);
  console.log("Mesa:", this.mesa?.NoMesa);

      // Crear un objeto NavigationExtras para pasar datos a través de queryParams
      const navigationExtras: NavigationExtras = {
        queryParams: {
          dato: codigo
        }
      };

  this.router.navigate(['/codigo'], navigationExtras);
}

}

/*@NgModule({
  declarations:[
    MesaCardComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    MesaCardComponent
  ]
})
export class MesaCardModule{}*/