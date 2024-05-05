import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formplat',
  templateUrl: './formplat.component.html',
  styleUrls: ['./formplat.component.css']
})
export class FormplatComponent implements OnInit {
  miFormulario!: FormGroup;
  dishName: string = '';
  dishDescription: string = '';
  mainIngredients: string = '';
  dishType: string = '';
  price: number | null = null;
  availability: string = '';
  specialDish: string = '';
  dishImage: File | null = null;

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

  ingredientes: string[] = ['Chiles', 'Jitomate', 'Lechuga'];
  selectedIngredients: { [key: string]: boolean } = {};
  newIngredient: string = '';

  agregarNuevoIngrediente() {
    if (this.newIngredient.trim() && !this.ingredientes.includes(this.newIngredient)) {
      this.ingredientes.push(this.newIngredient);
      this.newIngredient = '';
    }
  }

  agregarIngredientePersonalizado(nuevoIngrediente: string) {
    if (nuevoIngrediente.trim()) {
      this.ingredientes.push(nuevoIngrediente);
    }
  }
}
