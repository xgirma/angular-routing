import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    // @ts-ignore
    console.log('Current route: ', route.snapshot._routerState.url);
  }

  ngOnInit(): void {
  }

  goToItems() {
    this.router.navigate(['../first-component'], { relativeTo: this.route });
  }
}
