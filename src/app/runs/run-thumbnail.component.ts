import {Component, Input } from '@angular/core'
//import { EventEmitter } from 'protractor';

@Component({
    selector: 'run-thumbnail',
    template: ` 
    <div [routerLink]="['/runs', run?.id]" class="well thumbnail">
        <h2>{{run?.description}}</h2>
        <div>Date: {{run?.date}}</div>
        <div>Time: {{run?.time}}</div>
        <div>Duration: {{run?.duration}}</div>
        <div [ngSwitch]="run?.speed">
            Speed: {{run?.speed}}
            <span *ngSwitchCase="'6'">(Slow)</span>
            <span *ngSwitchDefault>(Normal)</span>
            <span *ngSwitchCase="'9'">(Fast)</span>
        </div>
        <div *ngIf="run?.location"> <!-- <div [hidden]="!run?.location">-->
            <span>Location: {{run?.location?.address}}</span>
            <span class="pad-left">{{run?.location?.city}}, {{run?.location?.country}}</span>
        </div>
        <div *ngIf="run?.onlineUrl"> <!--<div [hidden]="!run?.onlineUrl">-->
            Online URL: {{run?.onlineUrl}}
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

export class RunThumbnailComponent{
    @Input() run:any
} 