import { Component, OnInit, OnDestroy } from '@angular/core';
import RxEvent from '../rx-event';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit, OnDestroy {
  componentChangeTo: string;

  constructor(private event: RxEvent) { }

  ngOnInit() {
    this.event.subscribe('change:component', (data) => {
      this.componentChangeTo = data;
    });
  }

  ngOnDestroy() {
    this.event.dispose('change:component');
  }

}
