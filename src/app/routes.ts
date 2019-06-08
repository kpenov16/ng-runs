import { Routes } from '@angular/router'
import { RunsListComponent } from './runs/runs-list.component'
import { RunDetailsComponent } from './runs/run-details/run-detail.component'

export const appRoutes:Routes = [
    { path: 'runs', component: RunsListComponent },
    { path: 'runs/:id', component: RunDetailsComponent },
    { path: '', redirectTo: '/runs', pathMatch: 'full'}    
]