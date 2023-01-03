import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  promisse: Promise<String>;
  promiseData: string;

  constructor() { 
    
  }

  ngOnInit(): void {
    // this.getPromisse().then((v: any) => this.promiseData = v);
    this.promisse = this.getPromisse();
    
  }

  getPromisse() {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve("Promisse complete"), 3000);
    });
  }

}
