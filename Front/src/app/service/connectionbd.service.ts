import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Usuario } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConnectionbdService {
  private apiUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  login(correoElectronico: string, contrasena: string): Observable<any> {
    const body = {
      CorreoElectronico: correoElectronico,
      contrasena: contrasena
    };

    return this.http.post<Usuario>(`${this.apiUrl}/login`, body)
    .pipe(
      catchError(error => {
        // Manejo de errores
        return throwError(error);
      })
    );
  }
}
