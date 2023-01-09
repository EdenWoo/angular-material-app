import {ApplicationRef, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export const THEME_KEY = 'theme-key';
export const DARK_THEME = 'dark-theme';
export const LIGHT_THEME = 'light-theme';

@Injectable({providedIn: 'root'})
export class ThemingService {
    themes = [DARK_THEME, LIGHT_THEME];
    theme = new BehaviorSubject(LIGHT_THEME);

    constructor(private ref: ApplicationRef) {
        // Initially check if dark mode is enabled on system
        const darkModeOn = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        const themeValueFromLocalStorage = localStorage.getItem(THEME_KEY);

        if (themeValueFromLocalStorage === DARK_THEME) {
            this.theme.next(DARK_THEME);
        } else if (themeValueFromLocalStorage === LIGHT_THEME) {
            this.theme.next(LIGHT_THEME);
        } else if (darkModeOn) {
            // if not theme value store in localstorage use the prefers-color-scheme
            this.theme.next(DARK_THEME);
        } else {
            // default to light theme
            this.theme.next(LIGHT_THEME);
        }

        // Watch for changes of the preference
        window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
            const turnOn = e.matches;
            this.theme.next(turnOn ? DARK_THEME : LIGHT_THEME);
            localStorage.setItem(THEME_KEY, turnOn ? DARK_THEME : LIGHT_THEME);
            // Trigger refresh of UI
            this.ref.tick();
        });
    }
}
