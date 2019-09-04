import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightColorService {
  highlightSubject:BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  ngOnInit(){
    let highlightColor = getComputedStyle(document.documentElement).getPropertyPriority('--highlight-color-global');
    this.highlightSubject = new BehaviorSubject<string>(highlightColor);
  }

  getColor(){
    return this.highlightSubject.asObservable();
  }

  setColor(color: string){
    document.documentElement.style.setProperty('--highlight-color-global', color);
    this.highlightSubject.next(color);
  }
}