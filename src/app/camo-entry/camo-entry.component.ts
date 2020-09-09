import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-camo-entry',
  templateUrl: './camo-entry.component.html',
  styleUrls: ['./camo-entry.component.scss'],
})
export class CamoEntryComponent implements OnInit {
  @Input() userProgress: number;
  @Input() camoData: number;
  @Input() title: string;

  @Output() change = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  increment() {
    const userProgress = this.userProgress;
    if (userProgress + 1 <= this.camoData) {
      this.userProgress += 1;
      this.change.emit(this.userProgress);
    }
  }

  decrement() {
    const userProgress = this.userProgress;
    if (userProgress - 1 >= 0) {
      this.userProgress -= 1;
      this.change.emit(this.userProgress);
    }
  }

  sliderChange(data: MatSliderChange) {
    this.userProgress = data.value;
    this.change.emit(this.userProgress);
  }
}
