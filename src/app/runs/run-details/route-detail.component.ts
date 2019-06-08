import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from '@angular/router'
import { RouteService } from '../shared/route.service';

@Component({
    templateUrl:'./route-details.component.html',
    styles: [`
        .container { padding-left: 15px; padding-right: 15px;}
        .route-image { height: 100px; }
    `]
})
export class RouteDetailsComponent implements OnInit{
    route:any
    constructor(private routeService: RouteService, private activatedRoute: ActivatedRoute){

    }
    ngOnInit(){
        this.route = this.routeService.getRoute( +this.activatedRoute.snapshot.params['id'] ); //the '+' is a cast to a number 
    }
}