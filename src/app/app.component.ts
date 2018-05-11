import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentpage: String = "Home";
  isDarkTheme = false;
  title = 'app';

  public constructor(private breakpointObserver: BreakpointObserver) {
    //TODO dynamic title e.g. LDSS Self Service --> Router with titleService
  }
  get isMobile() {
    return this.breakpointObserver.isMatched('(max-width: 600px)');
  }

}
