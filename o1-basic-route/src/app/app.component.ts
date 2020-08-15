import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'o1-basic-route';

  constructor(private route: ActivatedRoute) {
    // @ts-ignore
    console.log('Current route: ', route.snapshot._routerState.url);
  }
}
