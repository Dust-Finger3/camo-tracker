import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  // Progress bar takes the following inputs
  @Input() value: number; // the current value, should be a number between 0 to max
  @Input() max: number; // the max number so we can calculate the ratio where value is at

  // This is what we use to render the progress bar, wired to the html
  // It's the number + % symbol;
  progressInPercent: string;

  constructor() {}

  // When this progress bar is about to be presented to the user (rendered), this function is called
  ngOnInit(): void {
    const progress = (this.value / this.max) * 100;
    this.progressInPercent = progress + '%';
  }
}
