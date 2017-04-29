import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamModule } from './exam/exam.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProductModule } from './product/product.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundService } from './services/not-found.service';
import { AlertComponent } from './alert/alert.component';
import { DynamicCompDirective } from './directives/dynamic-comp.directive';
import { DialogComponent } from './dialog/dialog.component';
import RxEvent from './rx-event';

const event = new RxEvent(false);
const revent = new RxEvent();

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashBoardComponent,
    AlertComponent,
    DynamicCompDirective,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductRoutingModule,
    ExamModule,
    ProductModule,
    // the root routing module must on the end of this array
    AppRoutingModule
  ],
  providers: [
    NotFoundService,
    { provide: RxEvent, useValue: event },
    { provide: 'Revent', useValue: revent }
  ],
  entryComponents: [
    AlertComponent,
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
