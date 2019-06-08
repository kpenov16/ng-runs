import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from '@angular/router'
import { RouteService } from '../shared/route.service';

@Component({
    templateUrl:'./run-details.component.html',
    styles: [`
        .container { padding-left: 15px; padding-right: 15px;}
        .run-image { height: 100px; }
    `]
})
export class RunDetailsComponent implements OnInit{
    run:any
    constructor(private runService: RouteService, private route:ActivatedRoute){

    }
    ngOnInit(){
        this.run = this.runService.getRoute( +this.route.snapshot.params['id'] ); //the '+' is a cast to a number 
    }
}