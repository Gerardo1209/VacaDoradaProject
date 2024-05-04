import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-formplat',
  standalone: true,
  imports: [

  ],
  templateUrl: './formplat.component.html',
  styleUrl: './formplat.component.css'
})
export class FormplatComponent implements OnInit{
  miFormulario!: FormGroup;
  dishName: string = '';
  dishDescription: string = '';
  mainIngredients: string = '';
  dishType: string = '';
  price: number | null = null; // Ahora la variable price puede ser un número o null
  availability: string = '';
  specialDish: string = '';
  dishImage: File | null = null; // Ahora la variable dishImage puede ser un objeto File o null

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      dishName: ['', Validators.required],
      dishDescription: ['', Validators.required],
      mainIngredients: ['', Validators.required],
      dishType: ['', Validators.required],
      price: ['', Validators.required],
      availability: ['', Validators.required],
      specialDish: [false],
      dishImage: ['']
    });
  }

  onSubmit() {
    // Lógica para enviar el formulario
    const formData = {
      dishName: this.dishName,
      dishDescription: this.dishDescription,
      mainIngredients: this.mainIngredients,
      dishType: this.dishType,
      price: this.price,
      availability: this.availability,
      specialDish: this.specialDish,
      dishImage: this.dishImage
    };

    // Reiniciar el formulario si es necesario
    this.resetForm();
  }

  onFileSelected(event: any) {
    // Manejar la selección de archivo aquí
    this.dishImage = event.target.files[0];
  }

  resetForm() {
    // Reiniciar los valores del formulario
    this.dishName = '';
    this.dishDescription = '';
    this.mainIngredients = '';
    this.dishType = '';
    this.price = null;
    this.availability = '';
    this.specialDish = '';
    this.dishImage = null;
  }

  ingredientes: string[] = ['Chiles', 'Jitomate', 'Lechuga']; // Lista de ingredientes predefinidos
  selectedIngredients: { [key: string]: boolean } = {};
  newIngredient: string = '';

  agregarNuevoIngrediente() {
    if (this.newIngredient.trim() && !this.ingredientes.includes(this.newIngredient)) {
      this.ingredientes.push(this.newIngredient);
      this.newIngredient = '';
    }
  }

  agregarIngredientePersonalizado(nuevoIngrediente: string) {
    if (nuevoIngrediente.trim()) { // Verificar si el ingrediente no está vacío
      this.ingredientes.push(nuevoIngrediente); // Agregar ingrediente a la lista
    }
  }

}
