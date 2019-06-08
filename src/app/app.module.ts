import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RunsAppComponent } from './runs-app.component';
import { RunsListComponent } from './runs/runs-list.component'
import { RouteThumbnailComponent } from './runs/route-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { RouteService } from './runs/shared/route.service'
import { ToastrService } from './common/toastr.service';
import { RunDetailsComponent } from './runs/run-details/run-detail.component';
import { appRoutes } from './routes'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    RunsAppComponent,
    RunsListComponent,
    RouteThumbnailComponent,
    RunDetailsComponent,
    NavBarComponent    
  ],
  providers: [
    RouteService,
    ToastrService
  ],
  bootstrap: [RunsAppComponent]
})
export class AppModule { }
