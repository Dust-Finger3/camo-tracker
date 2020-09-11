import { Component, Input, OnInit } from '@angular/core';
import { Progress } from '../home-page/Progress';
import { Weapon } from 'data/data-definitions'

@Component({
  selector: 'app-camo-card',
  templateUrl: './camo-card.component.html',
  styleUrls: ['./camo-card.component.scss']
})
export class CamoCardComponent implements OnInit {
  @Input() weapon: Weapon;
  @Input() progres: Progress;

  constructor() { }

  ngOnInit(): void {
  }

}
