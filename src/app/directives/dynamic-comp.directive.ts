import {
  Directive,
  ComponentFactory,
  ComponentRef,
  ComponentFactoryResolver,
  Input,
  ViewContainerRef,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { DialogComponent } from '../dialog/dialog.component';

const CMPN = {
  alert: AlertComponent,
  dialog: DialogComponent
};

@Directive({
  selector: '[tpDynamicComp]'
})
export class DynamicCompDirective implements OnInit, OnDestroy, OnChanges {

  @Input() type: string;

  componentRef: ComponentRef<AlertComponent>;
  constructor(private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
    ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['type']) {
      if (this.componentRef) {
        this.componentRef.destroy();
      }
      this.createComponent();
    }
  }

  createComponent() {
    this.container.clear();
    let cmp = CMPN[this.type] || CMPN.alert;
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(cmp);
    this.componentRef = this.container.createComponent(factory);
  }

  ngOnInit() {
    this.createComponent();
  }
  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
