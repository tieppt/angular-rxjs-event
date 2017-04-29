import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { NotFoundService } from './services/not-found.service';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { AlertComponent } from './alert/alert.component';
import { DialogComponent } from './dialog/dialog.component';
import RxEvent from './rx-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app works!';
  subscription: Subscription;
  isNotFound: Boolean = false;
  dynamicComType = 'alert';

  dynamicComp = AlertComponent;

  list$: Observable<number[]>;

  constructor(private nfService: NotFoundService, private event: RxEvent, @Inject('Revent') private revent) {}
  ngOnInit() {
    this.subscription = this.nfService.notFound$.subscribe(isNotFound => this.isNotFound = isNotFound);
    this.list$ = Observable.of([1, 2, 3, 4, 5, 6]).delay(1000);
  }

  changeComponent() {
    if (this.dynamicComType === 'alert') {
      this.dynamicComType = 'dialog';
      this.dynamicComp = DialogComponent;
    } else {
      this.dynamicComType = 'alert';
      this.dynamicComp = AlertComponent;
    }
    this.event.next('change:component', this.dynamicComType);
    this.revent.next('change:component', this.dynamicComType);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
