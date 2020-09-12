import { Component, Input, OnInit } from '@angular/core';
import { Progress, Weapon } from 'data/data-definitions';

@Component({
  selector: 'app-camo-card',
  templateUrl: './camo-card.component.html',
  styleUrls: ['./camo-card.component.scss'],
})
export class CamoCardComponent implements OnInit {
  @Input() weapon: Weapon;
  @Input() progress: Progress;

  constructor() {}

  ngOnInit(): void {}
}
