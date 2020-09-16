/**
 * DEFINITIONS
 */
export enum WeaponType {
  ALL = 'ALL',
  ASSAULT = 'ASSAULT',
  LMG = 'LMG',
  PISTOL = 'PISTOL',
  SHOTGUN = 'SHOTGUN',
  SMG = 'SMG',
  SNIPER = 'SNIPER',
  MARKSMAN = 'MARKSMAN',
  MELEE = 'MELEE',
  LAUNCHER = 'LAUNCHER',
}

export interface CamoData {
  kill?: number;
  crouch?: number; // Kills while crouching
  hip?: number; // Kills with hipfire
  long?: number; // Long shots
  head?: number; // Headshots
  full?: number; // Full attachments
  plain?: number; // No attachments

  //launchers only
  uav?: number; // destroy UAVs
  double?: number; // double kills
  coldBlooded?: number; // kills with cold-blooded perk
  sentry?: number; // destroy sentry gun
  streaks?: number; // destroy scorestreaks
  vtol?: number; //destroy VTols
  goliath?: number; // destroy goliath
  transformShield?: number; // destroy transform shield

  // Knife only
  behind?: number; // Kills from behind
  noDeath2?: number; // Knife only, kill 2 without dying
  noDeath3?: number; // Knife only, kill 3 without dying
  deadSilence?: number; // Knife only, kill while having dead silence
}

export interface Weapon {
  id: string;
  name: string;
  type: WeaponType;
  camo: CamoData;
}

export interface Progress {
  current: number;
  total: number;
  bar: string;
}
