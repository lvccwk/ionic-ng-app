import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input()
  count = 0;

  @Input()
  step = 1;

  @Output()
  ten = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  inc() {
    this.count += this.step;
    if (this.count % 10 == 0) {
      this.ten.emit(this.count);
    }
  }
}
