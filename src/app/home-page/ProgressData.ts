export class ProgressData {
  [weaponId: string]: Progress;
}

export class Progress {
  current: number;
  total: number;
  bar: string;
}
