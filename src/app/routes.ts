import { Routes } from '@angular/router'
import { RoutesListComponent } from './routes/routes-list.component'
import { RouteDetailsComponent } from './routes/route-details/route-detail.component'

export const appRoutes:Routes = [
    { path: 'routes', component: RoutesListComponent },
    { path: 'routes/:id', component: RouteDetailsComponent },
    { path: '', redirectTo: '/routes', pathMatch: 'full'}    
]