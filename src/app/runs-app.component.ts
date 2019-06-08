import { Component } from '@angular/core';
//<!--<runs-list></runs-list>-->
@Component({
  selector: 'runs-app',
  template: `
            <nav-bar></nav-bar>
            <router-outlet></router-outlet> 
            `
})
export class RunsAppComponent {
  title = 'ng-runs';
}
