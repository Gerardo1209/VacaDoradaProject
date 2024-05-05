import { Component, NgModule, OnInit, input } from '@angular/core';
import { ConnectionbdService } from '../service/connectionbd.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

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
  constructor(private bd:ConnectionbdService){}

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
        (response) => {
          // Manejar la respuesta del servidor aquí
          sessionStorage.setItem('currentUser', JSON.stringify(response));
          console.log(response);
          Swal.fire({
            title:'Inicio de sesión correcto',
            text:'Bienvenido ' + response.Nombre, 
            icon:'success',
            confirmButtonText:'Aceptar'
          })
        },
        (error) => {
          // Manejar errores aquí
          console.error(error);
        }
      );
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