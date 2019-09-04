import { Component, OnInit, OnDestroy } from '@angular/core';
import { HighlightColorService } from 'src/app/widget-module/color-picker/highlight-color.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit, OnDestroy {

  targetColor: String;
  subscription: Subscription = Subscription.EMPTY;

  constructor(private highlightColorService: HighlightColorService) { }

  ngOnInit() {
    this.subscription = this.highlightColorService
      .getColor()
      .subscribe(observableColor => {
        this.targetColor = observableColor;
        console.log(`observable_getColor: ${this.targetColor}`);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onColorChange(e) {
    this.highlightColorService.setColor(e);
  }

}