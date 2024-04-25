import { Routes } from '@angular/router';
import { MesaCardComponent } from './mesa-card/mesa-card.component';
import { ReservacionesMesasComponent } from './reservaciones-mesas/reservaciones-mesas.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'reservacionMesas', component: ReservacionesMesasComponent },
    { path: 'login', component: LoginComponent }
];