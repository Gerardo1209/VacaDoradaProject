import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-redireccion',

  templateUrl: './redireccion.component.html',
  styleUrl: './redireccion.component.css'
})
export class RedireccionComponent implements OnInit{
  userRole: string = " ";
  

  constructor(private router: Router){}

  ngOnInit(): void {
    this.userRole = localStorage.getItem('Rol') || " ";
    console.log("Variable userRole para comparar: ", this.userRole);
  }
  
}
@NgModule({
  declarations: [
    RedireccionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class RedireccionModule { }
