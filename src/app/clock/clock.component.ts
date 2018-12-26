import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.less']
})
export class ClockComponent implements OnInit {

  time = new Date().getTime();

  constructor() { }

  ngOnInit() {
    interval(1000).subscribe(this.tik);
  }

  tik = () => {
    this.time = new Date().getTime();
  }
}
