import { Component } from '@angular/core';
//<!--<runs-list></runs-list>-->
@Component({
  selector: 'runbuddy-app',
  template: `
            <nav-bar></nav-bar>
            <router-outlet></router-outlet> 
            `
})
export class RunbuddyAppComponent {
  title = 'ng-runs';
}
