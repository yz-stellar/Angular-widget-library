import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, observable, timer } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 's-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Input() videoLength: number;
  @Input() progressValue: number = 0;
  @Output() currentPosition = new EventEmitter<number>();

  progressSubject = new BehaviorSubject<number>(0);

  constructor() { }

  ngOnInit() {
    this.subscribeProgress()
  }

  onInputChange(domValue) {
    this.progressValue = domValue;
    this.currentPosition.emit(this.progressValue);
    this.setProgress(this.progressValue)
  }


  subscribeProgress() {
    this.getProgress()
      .pipe(throttleTime(25))
      .subscribe(observableProgressValue => {
        console.log(`observableProgressValue: ${observableProgressValue}`)
        this.currentPosition.emit(observableProgressValue);
      });
  }

  getProgress() {
    return this.progressSubject.asObservable();
  }

  setProgress(progressValue: number) {
    this.progressSubject.next(progressValue);
  }

}