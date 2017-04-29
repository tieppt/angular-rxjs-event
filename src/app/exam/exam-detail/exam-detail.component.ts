import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss']
})
export class ExamDetailComponent implements OnInit, OnDestroy {

  step: number;
  examId: number;

  data: any = {};

  componentChangeTo: string;

  constructor(private router: Router, private route: ActivatedRoute, @Inject('Revent') private event) { }

  ngOnInit() {
    this.route.params
      .map(params => ({
        id: params['id'] || 1,
        step: params['step'] || 1
      }))
      .subscribe(p => {
        this.data.examId = p.id;
        this.data.step = p.step;
      })
    this.event.subscribe('change:component', (data) => {
      this.componentChangeTo = data;
    });
  }

  doIt() {
    let matrixUrlData = {
      id: this.examId,
      step: this.step
    };
    this.router.navigate(['/exam', 'detail', matrixUrlData]);
  }

  ngOnDestroy() {
    this.event.dispose('change:component');
  }

}
