import { CommonModule } from '@angular/common'; // Importa CommonModule
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-formplat',
  templateUrl: './formplat.component.html',
  styleUrls: ['./formplat.component.css']
})

export class FormplatComponent implements OnInit {
  miFormulario!: FormGroup;
  dishName: string = '';
  dishDescription: string = '';
  dishType: string = '';
  price: number | null = null;
  dishImage: File | null = null;
  ingredientes: any;
  selectedIngredients: { [key: string]: boolean } = {};
  newIngredient: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      dishName: ['', Validators.required],
      dishDescription: ['', Validators.required],
      dishType: ['', Validators.required],
      price: ['', Validators.required]
    });

    // Obtener la lista de ingredientes existentes al iniciar el componente
    //this.getIngredientes();
    console.log("Ingredientes de BD: ",this.ingredientes);
    this.http.get<any>('http://localhost:3000/consulta/ingredientes').subscribe(data => {
      this.ingredientes = data; // Almacenamos los datos en la variable 'ingredientes'
      console.log("Ingredientes de BD: ",this.ingredientes);
      console.log("Ingredientes de BD DATA: ",data);

    });

  }

  onSubmit() {
    // Lógica para enviar el formulario
    const formData = {
      dishName: this.dishName,
      dishDescription: this.dishDescription,
      dishType: this.dishType,
      price: this.price
    };

    // Enviar los datos al backend
    this.http.post<any>('/api/nuevo-platillo', formData).subscribe(response => {
      console.log(response);
      // Reiniciar el formulario si es necesario
      this.resetForm();
    });
  }

  onFileSelected(event: any) {
    // Manejar la selección de archivo aquí
    this.dishImage = event.target.files[0];
  }

  resetForm() {
    // Reiniciar los valores del formulario
    this.dishName = '';
    this.dishDescription = '';
    this.dishType = '';
    this.price = null;
    this.dishImage = null;
  }

 /* getIngredientes() {
    // Obtener la lista de ingredientes del backend
    this.http.get<any>('/api/ingredientes').subscribe(response => {
      this.ingredientes = response.map((ingrediente: any) => ingrediente.Nombre);
    });
  }*/

  agregarNuevoIngrediente() {
    if (this.newIngredient.trim() && !this.ingredientes.includes(this.newIngredient)) {
      // Agregar el nuevo ingrediente a la lista
      this.ingredientes.push(this.newIngredient);

      // Limpiar el campo de nuevo ingrediente
      this.newIngredient = '';
    }
  }
}
/*export class FormplatComponent implements OnInit {
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
}*/


@NgModule({
  declarations: [
    FormplatComponent
  ],
  imports: [
    CommonModule, // Agrega CommonModule aquí
    FormsModule,
    ReactiveFormsModule  // Agrega FormsModule aquí
  
  ],
  exports: [
    FormplatComponent
  ]
})
export class FormplatModule { }
