import { Component, OnInit } from '@angular/core';
import { ProgressDataIndex, Weapon } from 'data/data-definitions';
import { ASSAULT, LAUNCHER, LMG, MARKSMAN, MELEE, PISTOL, SHOTGUN, SMG, SNIPER } from 'data/weapons-camo';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  weapons: Weapon[];

  // This is used to wire user's progress to the html (the view)
  progressData: ProgressDataIndex = {};

  constructor() {
    // Combine all the weapons in weapons-camo file.
    const weapons = [].concat(
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

    // For demo
    const fakeUserProgress1 = 1;
    const fakeUserProgress2 = 2;
    const fakeUserProgress3 = 3;

    const progressData = this.progressData;
    for (let i = 0, len = weapons.length; i < len; i++) {
      const weapon = weapons[i];

      // Uncomment this line to see what it actually does on chrome dev tool
      // console.log(weapon);

      const weaponCamoLength = Object.keys(weapon.camo).length;
      let userProgress = 0;

      // Fake it for now, later on we need to get it from data storage
      if (i % 3 === 0) {
        userProgress = fakeUserProgress3;
      } else if (i % 2 === 0) {
        userProgress = fakeUserProgress2;
      } else {
        userProgress = fakeUserProgress1;
      }

      progressData[weapon.id] = {
        current: userProgress,
        total: weaponCamoLength,
      };
    }

    // Uncomment this line to see what it actually does on chrome dev tool
    // console.log(progressData);
    this.weapons = weapons;
  }

  ngOnInit(): void {}
}
