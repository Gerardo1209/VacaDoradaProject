import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConnectionbdService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  login(correoElectronico: string, contrasena: string): Observable<Usuario> {
    console.log(correoElectronico)
    console.log(contrasena)
    const body = {
      CorreoElectronico: correoElectronico,
      contrasena: contrasena
    };

    return this.http.post<any>(`${this.apiUrl}/login`, body)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'Error desconocido';
          if (error.error instanceof ErrorEvent) {
            // Error del lado del cliente
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // Error del lado del servidor
            errorMessage = `Código: ${error.status}, Mensaje: ${error.error.message}`;
          }
          console.error(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
}
