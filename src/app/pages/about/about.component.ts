import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  redirectGithub(): void {
    window.open("https://github.com/murillo-nahas");
  }

  redirectLinkedin(): void {
    window.open("https://www.linkedin.com/in/murillo-nahas/");
  }

  redirectTwitter(): void {
    window.open("https://twitter.com/murillonahvs");
  }
}
