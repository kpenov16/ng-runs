import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router"
import { Injectable } from "@angular/core"
import { RouteService } from '../shared/route.service'

@Injectable()
export class RouteRouterActivator implements CanActivate{
    constructor(private routeService: RouteService, private router: Router){

    }
    canActivate( activatedRouteSnapshot: ActivatedRouteSnapshot ){
        const routeExists = !!this.routeService
                                  .getRoute( +activatedRouteSnapshot.params['id'] ) //!! menas to cast to boolen     
        
        if(!routeExists){
            this.router.navigate(['/404'])
        }
        return routeExists;
    }

}