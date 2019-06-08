import {Component, OnInit} from '@angular/core'
import {RouteService} from './shared/route.service'
import { ToastrService } from '../common/toastr.service';
//selector: 'runs-list',
    
@Component({
    template: `
    <div>
        <h1>Upcomming rutes</h1>
        <hr>
        <div class="row">
            <div *ngFor="let local_route of local_routes" class="col-md-5">
                <route-thumbnail (click)="handleThumbnailClick(local_route.description)"  [route]="local_route"></route-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class RoutesListComponent implements OnInit{
    local_routes:any[]    
    constructor(private routeService: RouteService, private toastr: ToastrService){        
    }
    ngOnInit(){
        this.local_routes = this.routeService.getAllRoutes();
    }
    handleThumbnailClick(description){
        this.toastr.success(description)    
    }

}