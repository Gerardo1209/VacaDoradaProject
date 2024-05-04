export interface Mesa {
    NoMesa: number;
    Capacidad: number;
    Estado: string;
  }
  
  export interface Ingrediente {
    IdIngrediente: number;
    Nombre: string;
    UnidadMedida: string;
  }
  
  export interface Platillo {
    IdPlatillo: number;
    Nombre: string;
    Descripcion: string;
    Precio: number;
    Tipo: 'Entrante' | 'Principal' | 'Postre' | 'Bebida';
    RutaImg: string;
  }
  
  export interface Usuario {
    IdUsuario: number;
    Nombre: string;
    Apellido: string;
    CorreoElectronico: string;
    Password: string;
    Rol: 'Mesero' | 'Cocinero' | 'Barman' | 'Administrador';
    Estado: 'Activo' | 'Inactivo';
  }
  