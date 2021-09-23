import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count = 0;
  onIncrease = () => {
    this.count += 1;
  };
  onDecrease = () => {
    this.count -= 1;
  };
  onReset = () => {
    this.count = 0;
  };

  constructor() {}

  ngOnInit() {}
}
