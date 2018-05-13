import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentpage = 'Test';
  isDarkTheme = false;

  public constructor(
    private breakpointObserver: BreakpointObserver, 
    private activatedRoute:ActivatedRoute, 
    private router: Router) {   
  }
  ngOnInit(){
    this.router.events.subscribe
    ((event) => {
      if (event instanceof NavigationEnd) {
          this.currentpage = this.activatedRoute.root.firstChild.snapshot.data['title'];
          
      }
      
    });
      
  }

  get isMobile() {
    return this.breakpointObserver.isMatched('(max-width: 600px)');
  }

  logout(){
    console.log("Demo logout funktion")
  }
}
