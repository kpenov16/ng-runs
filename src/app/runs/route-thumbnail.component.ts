import {Component, Input } from '@angular/core'
//import { EventEmitter } from 'protractor';

@Component({
    selector: 'route-thumbnail',
    template: ` 
    <div [routerLink]="['/runs', route?.id]" class="well thumbnail">
        <h2>{{route?.description}}</h2>
        <div>Date: {{route?.date}}</div>
        <div>Time: {{route?.time}}</div>
        <div>Duration: {{route?.duration}}</div>
        <div [ngSwitch]="route?.speed">
            Speed: {{route?.speed}}
            <span *ngSwitchCase="'6'">(Slow)</span>
            <span *ngSwitchDefault>(Normal)</span>
            <span *ngSwitchCase="'9'">(Fast)</span>
        </div>
        <div *ngIf="route?.location"> <!-- <div [hidden]="!route?.location">-->
            <span>Location: {{route?.location?.address}}</span>
            <span class="pad-left">{{route?.location?.city}}, {{route?.location?.country}}</span>
        </div>
        <div *ngIf="route?.onlineUrl"> <!--<div [hidden]="!route?.onlineUrl">-->
            Online URL: {{route?.onlineUrl}}
        </div>
    </div>        
    `,
    styles: [`
        .red { color: red !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px;}
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class RouteThumbnailComponent{
    @Input() route:any
} 