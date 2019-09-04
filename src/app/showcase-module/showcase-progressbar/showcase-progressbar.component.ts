import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';


@Component({
  selector: 'app-showcase-progressbar',
  templateUrl: './showcase-progressbar.component.html',
  styleUrls: ['./showcase-progressbar.component.scss']
})
export class ShowcaseProgressbarComponent implements OnInit {

  videoLength: number = 60;
  progressValue: number = 0;

  timer: any;
  isPlay: boolean = true;


  constructor() { }

  ngOnInit() { }

  onCurrentPosition(e) {
    //console.log(`Parent_onCurrentPosition: ${e}`);
    this.progressValue = e;
  }

  onPlay() {
    if (this.isPlay) { // avoid more than once press [ Play ]
      this.setTimer(1000);
      this.isPlay = false;
    }
  }

  onPause() {
    clearInterval(this.timer);
    this.isPlay = true;
  }

  onReset() {
    this.progressValue = 0;
    this.onPause();
  }

  setTimer(milliseconds: number) {
    this.timer = setInterval(() => {
      if (this.progressValue < this.videoLength) {
        this.progressValue++;
       
       // this.setProgress();
      
      }
    }, milliseconds)
  }

}
