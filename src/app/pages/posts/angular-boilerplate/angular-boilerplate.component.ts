import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-boilerplate',
  templateUrl: './angular-boilerplate.component.html',
  styleUrls: ['./angular-boilerplate.component.scss']
})
export class AngularBoilerplateComponent {

  defaultRoute: string = '<router-outlet></router-outlet>'

  redirectRoute: string = `{ path: '', redirectTo: 'home', pathMatch: 'full' }`;

  route: string = `{ path: '', component: 'home' }`;

  redirectTwitter(): void {
    window.open("https://twitter.com/murillonahvs");
  }

  onlyReading: boolean = true;

  clickReading(): void {
    this.onlyReading = !this.onlyReading;
  }

}
