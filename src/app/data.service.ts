import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

const USER_DATA_LOCAL_STORAGE_KEY = 'camo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userCamo = {};

  constructor() {
    // If there's an update from another tab
    fromEvent(window, 'storage').subscribe((e: StorageEvent) => {
      this.load();
    });

    this.load();
  }

  private load() {
    let userCamo = {};
    try {
      userCamo = JSON.parse(
        localStorage.getItem(USER_DATA_LOCAL_STORAGE_KEY) || '{}'
      );
    } catch (e) {
      console.error('Unable to read save file');
    }
    this.userCamo = userCamo;
  }

  save() {
    localStorage.setItem(
      USER_DATA_LOCAL_STORAGE_KEY,
      JSON.stringify(this.userCamo)
    );
  }

  getUserData() {
    return this.userCamo;
  }

  clearData() {
    localStorage.clear();
    this.userCamo = {};
  }
}
