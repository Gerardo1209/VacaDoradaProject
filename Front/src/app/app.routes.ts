import { Routes } from '@angular/router';
import { MesaCardComponent } from './mesa-card/mesa-card.component';
import { ReservacionesMesasComponent } from './reservaciones-mesas/reservaciones-mesas.component';
import { LoginComponent } from './login/login.component';
import { MeseroPedidosComponent } from './mesero-pedidos/mesero-pedidos.component';
import { FormplatComponent } from './formplat/formplat.component';
import { AnalyticComponent } from './analytic/analytic.component';

export const routes: Routes = [
    { path: 'reservacionMesas', component: ReservacionesMesasComponent },
    { path: 'login', component: LoginComponent },
    { path: 'meseroPedidos', component: MeseroPedidosComponent },
    { path: 'formplat', component: FormplatComponent },
    { path: 'analisis', component: AnalyticComponent },
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent },
    
];