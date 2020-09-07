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
}

export interface CamoData {
  [key: string]: number;
}

export interface Weapon {
  id: string;
  name: string;
  type: WeaponType;
  camo: CamoData;
}
