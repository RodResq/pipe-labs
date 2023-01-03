import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-async-observable-pipe',
  templateUrl: './async-observable-pipe.component.html',
  styleUrls: ['./async-observable-pipe.component.css']
})
export class AsyncObservablePipeComponent implements OnInit {

  // observableData: number;
  // subsciption: any;
  observable: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.observable = this.getObservable();
  }

  getObservable() {
    return Observable
      .interval(1000)
      .take(10)
      .map((v) => v * v)
  }

  // subscribeObservable() {
  //   this.subsciption = this.getObservable()
  //     .subscribe( v => this.observableData = v);
  // }

  // ngOnDestroy(): void {
    // if (this.subsciption) {
    //   this.subsciption.unsubscribe();
    // }
  // }

}
