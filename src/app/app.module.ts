import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RunsAppComponent } from './runs-app.component';
import { RoutesListComponent } from './runs/routes-list.component'
import { RouteThumbnailComponent } from './runs/route-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { RouteService } from './runs/shared/route.service'
import { ToastrService } from './common/toastr.service';
import { RouteDetailsComponent } from './runs/run-details/route-detail.component';
import { appRoutes } from './routes'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    RunsAppComponent,
    RoutesListComponent,
    RouteThumbnailComponent,
    RouteDetailsComponent,
    NavBarComponent    
  ],
  providers: [
    RouteService,
    ToastrService
  ],
  bootstrap: [RunsAppComponent]
})
export class AppModule { }
