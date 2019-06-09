import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { RouteService } from './shared/route.service'
import { map} from 'rxjs/operators'


@Injectable()
export class RouteListResolver implements Resolve<any>{
    constructor(private routeService:RouteService){

    }

    resolve(){
        return this.routeService.getAllRoutes().pipe( map(routes => routes) )
    }
}