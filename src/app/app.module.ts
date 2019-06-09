import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RunbuddyAppComponent } from './runbuddy-app.component';
import { RoutesListComponent } from './routes/routes-list.component'
import { RouteThumbnailComponent } from './routes/route-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { RouteService } from './routes/shared/route.service'
import { ToastrService } from './common/toastr.service';
import { RouteDetailsComponent } from './routes/route-details/route-detail.component';
import { appRoutes } from './routes'
import { CreateRouteComponent } from './routes/create-route.component'
import { Error404Component } from './errors/404.component'
import { RouteRouterActivator } from './routes/route-details/route-router-activator.service'
import { RouteListResolver } from './routes/routes-list-resolver.service'


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    RunbuddyAppComponent,
    RoutesListComponent,
    RouteThumbnailComponent,
    RouteDetailsComponent,
    CreateRouteComponent,
    NavBarComponent, 
    Error404Component    
  ],
  providers: [
    RouteService,
    ToastrService,
    RouteRouterActivator,
    RouteListResolver,
    {
      provide: 'canDeactivateCreateRoute', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [RunbuddyAppComponent]
})

export class AppModule { }

export function checkDirtyState(component:CreateRouteComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this route, do you really want to cancel?')
  }
  return true
}
