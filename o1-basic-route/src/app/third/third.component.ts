import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit, OnDestroy {
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const page = this.route.snapshot.paramMap.get('page');
    console.log(page);

    this.sub = this.route.params.subscribe( params => {
      console.log(params['page'])
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
