import { Component, NgModule, OnInit, input } from '@angular/core';
import { ConnectionbdService } from '../service/connectionbd.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces'; // Importamos la interfaz Usuario

enum UserRole {
  Mesero = 'mesero',
  Barman = 'barman',
  Cocinero = 'cocinero',
  Admin = 'admin'
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent implements OnInit {
  username: string ="";
  password: string="";
  inputusername!:HTMLInputElement 
  inputupasswd!:HTMLInputElement 
  constructor(private bd:ConnectionbdService, private router: Router){}

  ngOnInit(): void {
      
  }
  login() {
    this.inputusername = <HTMLInputElement> document.getElementById("exampleInputEmail1")
    this.inputupasswd = <HTMLInputElement> document.getElementById("exampleInputPassword1")
    if(this.inputusername && this.inputupasswd){
     this.username = this.inputusername.value
     this.password = this.inputupasswd.value
    }
    console.log(this.username)
    console.log(this.password)
    this.bd.login(this.username, this.password)
      .subscribe(
        (response: Usuario) => {
          // Manejar la respuesta del servidor aquí
          sessionStorage.setItem('currentUser', JSON.stringify(response));
          console.log(response);
          Swal.fire({
            title:'Inicio de sesión correcto',
            text:'Bienvenido ' + response.Nombre, 
            icon:'success',
            confirmButtonText:'Aceptar'
          });
        
         
          // Mapeamos el rol del usuario al enum UserRole
          const userRole: UserRole = this.mapToUserRole(response.Rol);
          localStorage.setItem('Rol',userRole);
          console.log("Rol Localstorage:", localStorage.getItem('Rol'));
          console.log("Mi Usuario es:", userRole);
          switch (userRole) {
            case UserRole.Mesero:
              console.log("Entre a case Mesero");
              this.router.navigate(['/redireccion']);
              console.log(" Acabo de navegar a meseroPedido");
              break;
            case UserRole.Barman:
              // Redirige a la vista de barman cuando esté disponible
              break;
            case UserRole.Cocinero:
              console.log("Entre a case Cocinero");
              this.router.navigate(['/redireccion']);
              break;
            case UserRole.Admin:
              console.log("Tengo mi rol de Usuario y voy a navegar");
              this.router.navigate(['/redireccion']);
              console.log("Acabo de navegar a redireccion");
              break;
            default:
              // Maneja el caso si el rol no coincide con ninguno de los roles esperados
              break;
          }
        },
        (error) => {
          // Manejar errores aquí
          console.error(error);
        }
      );
  }

  private mapToUserRole(role: string): UserRole {
    switch (role) {
      case 'Mesero':
        return UserRole.Mesero;
      case 'Barman':
        return UserRole.Barman;
      case 'Cocinero':
        return UserRole.Cocinero;
      case 'Administrador':
        return UserRole.Admin;
      default:
        // Si el rol no es reconocido, se asume el rol de usuario por defecto
        return UserRole.Mesero;
    }

      
      
    }
}


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
