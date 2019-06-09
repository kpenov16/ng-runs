import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    template:`
    <h1> New Route <h2>
    <hr>
    <div class="col-md-6">
        <h3>[Create Route From will go here]</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
    `
})

export class CreateRouteComponent{
    isDirty:boolean = true
    constructor(private router: Router){
    }
    cancel(){
        this.router.navigate(['/routes'])
    }
}