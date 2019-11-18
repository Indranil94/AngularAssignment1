import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styles: [`h3 {
                color: white;
                background-color: red;
                text-align: center;
                }`]
})
export class FailureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
