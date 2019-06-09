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
    NavBarComponent    
  ],
  providers: [
    RouteService,
    ToastrService
  ],
  bootstrap: [RunbuddyAppComponent]
})
export class AppModule { }
