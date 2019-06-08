import {Component, OnInit} from '@angular/core'
import {RouteService} from './shared/route.service'
import { ToastrService } from '../common/toastr.service';
//selector: 'runs-list',
    
@Component({
    template: `
    <div>
        <h1>Upcomming runs</h1>
        <hr>
        <div class="row">
            <div *ngFor="let local_route of local_routes" class="col-md-5">
                <run-thumbnail (click)="handleThumbnailClick(local_route.description)"  [run]="local_route"></run-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class RunsListComponent implements OnInit{
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