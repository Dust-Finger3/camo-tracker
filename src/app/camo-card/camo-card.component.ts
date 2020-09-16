import { Component, Input, OnInit } from '@angular/core';
import { Weapon } from 'data/data-definitions'
import { ProgressData } from '../home-page/ProgressData';

@Component({
  selector: 'app-camo-card',
  templateUrl: './camo-card.component.html',
  styleUrls: ['./camo-card.component.scss']
})
export class CamoCardComponent implements OnInit {
  @Input() weapon: Weapon;
  @Input() progress: ProgressData;

  constructor() { }

  ngOnInit(): void {
  }

}
