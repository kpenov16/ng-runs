import { Routes } from '@angular/router'
import { RoutesListComponent } from './runs/routes-list.component'
import { RouteDetailsComponent } from './runs/run-details/route-detail.component'

export const appRoutes:Routes = [
    { path: 'runs', component: RoutesListComponent },
    { path: 'runs/:id', component: RouteDetailsComponent },
    { path: '', redirectTo: '/runs', pathMatch: 'full'}    
]