import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // @ts-ignore
    console.log('Current route: ', route.snapshot._routerState.url);
  }

  ngOnInit(): void {
  }

}
