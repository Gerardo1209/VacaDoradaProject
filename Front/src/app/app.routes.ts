import { Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { AnalyticComponent } from './analytic/analytic.component';
import { DescmesasComponent } from './descmesas/descmesas.component';
import { FormplatComponent } from './formplat/formplat.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MeseroPedidosComponent } from './mesero-pedidos/mesero-pedidos.component';
import { ReservacionesMesasComponent } from './reservaciones-mesas/reservaciones-mesas.component';
import { RedireccionComponent } from './redireccion/redireccion.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';
import { PlatosComponent } from './platos/platos.component';
import { MenuComponent } from './menu/menu.component';


export const routes: Routes = [
    { path: 'reservacionMesas', component: ReservacionesMesasComponent },
    { path: 'login', component: LoginComponent },
    { path: 'meseroPedidos', component: MeseroPedidosComponent },
    { path: 'analisis', component: AnalyticComponent },
    { path: 'descmesas', component: DescmesasComponent },
    { path: 'formplat', component: FormplatComponent},
    { path: 'inicio', component: InicioComponent },
    { path: 'redireccion', component: RedireccionComponent},
    { path: 'acercaDe', component: AcercaDeComponent },
    
    { path: 'bebidas', component: BebidasComponent },
    { path: 'postres', component: PostresComponent },
    { path: 'platos', component: PlatosComponent },
    { path: 'reservaciones', component: ReservacionesMesasComponent },
    { path: 'menu', component: MenuComponent},
    { path: '', component: InicioComponent },
    { path: '**', component: LoginComponent },
    
    
    
];