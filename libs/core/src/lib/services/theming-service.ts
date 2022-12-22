import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const THEME_KEY = 'theme-key';

@Injectable({ providedIn: 'root' })
export class ThemingService {
  themes = ['dark-theme', 'light-theme'];
  theme = new BehaviorSubject('light-theme');

  constructor(private ref: ApplicationRef) {
    // Initially check if dark mode is enabled on system
    const darkModeOn = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const themeValueFromLocalStorage = localStorage.getItem(THEME_KEY);

    if (themeValueFromLocalStorage === 'dark-theme') {
      this.theme.next('dark-theme');
    } else if (themeValueFromLocalStorage === 'light-theme') {
      this.theme.next('light-theme');
    } else if (darkModeOn) {
      // if not theme value store in localstorage use the prefers-color-scheme
      this.theme.next('dark-theme');
    } else {
      // default to light theme
      this.theme.next('light-theme');
    }

    // Watch for changes of the preference
    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
      const turnOn = e.matches;
      this.theme.next(turnOn ? 'dark-theme' : 'light-theme');
      localStorage.setItem(THEME_KEY, turnOn ? 'dark-theme' : 'light-theme');
      // Trigger refresh of UI
      this.ref.tick();
    });
  }
}
