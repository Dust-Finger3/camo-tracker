import { Component, OnInit, Input } from '@angular/core';
import { ProgressData } from '../home-page/ProgressData';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() progress: ProgressData;

  constructor() { }

  ngOnInit(): void {
  }

}
