import { Component, OnDestroy, OnInit } from '@angular/core';
import { CamoData, Weapon } from 'data/data-definitions';
import { ASSAULT, LAUNCHER, LMG, MARKSMAN, MELEE, PISTOL, SHOTGUN, SMG, SNIPER } from 'data/weapons-camo';
import { fromEvent, Subscription } from 'rxjs';

import { DataService } from '../data.service';

interface OverallProgress {
  current: number;
  total: number;
  bar: string;
}

interface OverallProgressData {
  [weaponId: string]: OverallProgress;
}

interface ProgressDataPerCamo {
  [weaponId: string]: CamoData;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  weapons: Weapon[];

  // This is used to wire user's progress to the html (the view)
  overallProgressData: OverallProgressData = {};

  isExpanded: { [weaponId: string]: boolean } = {};

  progressDataPerCamo: ProgressDataPerCamo = {};

  $localStorageSubscription: Subscription;

  constructor(private dataService: DataService) {
    // Combine all the weapons in weapons-camo file.
    this.weapons = [].concat(
      ASSAULT,
      SNIPER,
      LMG,
      SMG,
      SHOTGUN,
      PISTOL,
      MARKSMAN,
      MELEE,
      LAUNCHER
    );

    this.setup();

    this.$localStorageSubscription = fromEvent(window, 'storage').subscribe(
      (e: StorageEvent) => {
        // Every time there's a change in another tab, run the setup
        this.setup();
      }
    );
  }

  private setup() {
    const weapons = this.weapons;
    this.progressDataPerCamo = this.dataService.getUserData();

    for (let i = 0, len = weapons.length; i < len; i++) {
      const weapon = weapons[i];
      this.calculateProgressPercentage(weapon);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.$localStorageSubscription) {
      this.$localStorageSubscription.unsubscribe();
    }
  }

  progressChange(weapon: Weapon) {
    this.calculateProgressPercentage(weapon);
    this.dataService.save();
  }

  private calculateProgressPercentage(weapon) {
    let userOverallProgress = 0;

    const keys = Object.keys(weapon.camo);
    const weaponCamoLength = keys.length;

    const userProgressData = this.progressDataPerCamo[weapon.id];
    if (userProgressData) {
      for (const key of keys) {
        if (userProgressData[key] === weapon.camo[key]) {
          userOverallProgress++;
        }
      }
    } else {
      // If no user progress data, copy from weapon camo
      const camoData = Object.assign({}, weapon.camo);

      // Set every entry to 0
      for (const key of keys) {
        camoData[key] = 0;
      }

      this.progressDataPerCamo[weapon.id] = camoData;
    }

    const progressPercentage = (userOverallProgress / weaponCamoLength) * 100;
    this.overallProgressData[weapon.id] = {
      current: userOverallProgress,
      total: weaponCamoLength,
      bar: progressPercentage + '%',
    };
  }
}
