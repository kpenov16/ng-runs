import { Routes } from '@angular/router'
import{
    RoutesListComponent,
    RouteDetailsComponent,
    CreateRouteComponent,
    RouteRouterActivator,
    RouteListResolver
} from './routes/index'

import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
    { path: 'routes/new', component: CreateRouteComponent, canDeactivate: ['canDeactivateCreateRoute']},
    { path: 'routes', component: RoutesListComponent, resolve: {resolved_routes: RouteListResolver} },
    { path: 'routes/:id', component: RouteDetailsComponent, canActivate: [ RouteRouterActivator ] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/routes', pathMatch: 'full'},
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]

//import { RoutesListComponent } from './routes/routes-list.component'
//import { RouteDetailsComponent } from './routes/route-details/route-detail.component'
//import { CreateRouteComponent } from './routes/create-route.component'
//import { RouteRouterActivator } from './routes/route-details/route-router-activator.service'
//import { RouteListResolver } from './routes/routes-list-resolver.service';
