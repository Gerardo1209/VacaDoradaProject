import { Routes } from '@angular/router';
import { MesaCardComponent } from './mesa-card/mesa-card.component';
import { ReservacionesMesasComponent } from './reservaciones-mesas/reservaciones-mesas.component';
import { LoginComponent } from './login/login.component';
import { MeseroPedidosComponent } from './mesero-pedidos/mesero-pedidos.component';
import { FormplatComponent } from './formplat/formplat.component';
import { AnalyticComponent } from './analytic/analytic.component';
import { DescmesasComponent } from './descmesas/descmesas.component';

export const routes: Routes = [
    { path: 'reservacionMesas', component: ReservacionesMesasComponent },
    { path: 'login', component: LoginComponent },
    { path: 'meseroPedidos', component: MeseroPedidosComponent },
    { path: 'analisis', component: AnalyticComponent },
    { path: 'descmesas', component: DescmesasComponent },
    { path: 'formplat', component: FormplatComponent},
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent },
    
];