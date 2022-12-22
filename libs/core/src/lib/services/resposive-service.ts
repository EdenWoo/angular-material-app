import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {
    SCREEN_DESKTOP,
    SCREEN_DESKTOP_GT_SM,
    SCREEN_DESKTOP_LG,
    SCREEN_DESKTOP_MD,
    SCREEN_DESKTOP_SM,
    SCREEN_LG,
    SCREEN_LT_TABLET,
    SCREEN_MD,
    SCREEN_PHONE,
    SCREEN_SM,
    SCREEN_TABLET,
    SCREEN_XL,
    SCREEN_XS,
    ScreenMatch,
    VIEWPORT_SIZES,
} from './breakpoints.config';

@Injectable({providedIn: 'root'})
export class ResponsiveService {
    isXs$ = this.getScreen(SCREEN_XS);
    isSm$ = this.getScreen(SCREEN_SM);
    isMd$ = this.getScreen(SCREEN_MD);
    isLg$ = this.getScreen(SCREEN_LG);
    isXl$ = this.getScreen(SCREEN_XL);
    tablet$ = this.breakpointObserver.observe(SCREEN_TABLET).pipe(map((breakpoint) => breakpoint.matches));
    ltTablet$ = this.breakpointObserver.observe(SCREEN_LT_TABLET).pipe(map((breakpoint) => breakpoint.matches));
    phone$ = this.breakpointObserver.observe(SCREEN_PHONE).pipe(map((breakpoint) => breakpoint.matches));
    desktop$ = this.breakpointObserver.observe(SCREEN_DESKTOP).pipe(map((breakpoint) => breakpoint.matches));
    desktopLg$ = this.breakpointObserver.observe(SCREEN_DESKTOP_LG).pipe(map((breakpoint) => breakpoint.matches));
    desktopMd$ = this.breakpointObserver.observe(SCREEN_DESKTOP_MD).pipe(map((breakpoint) => breakpoint.matches));
    desktopSm$ = this.breakpointObserver.observe(SCREEN_DESKTOP_SM).pipe(map((breakpoint) => breakpoint.matches));
    desktopGtSm$ = this.breakpointObserver.observe(SCREEN_DESKTOP_GT_SM).pipe(map((breakpoint) => breakpoint.matches));

    constructor(private breakpointObserver: BreakpointObserver) {
    }

    getScreen(screen: any) {
        return this.breakpointObserver.observe(screen).pipe(map((breakpoint) => breakpoint.matches));
    }

    getScreens() {
        return this.breakpointObserver.observe(VIEWPORT_SIZES).pipe(
            map((state) => {
                const screenMatch: ScreenMatch = {
                    phone: this.breakpointObserver.isMatched(SCREEN_PHONE),
                    tablet: this.breakpointObserver.isMatched(SCREEN_TABLET),
                    desktop: this.breakpointObserver.isMatched(SCREEN_DESKTOP),
                    desktopSm: this.breakpointObserver.isMatched(SCREEN_DESKTOP_SM),
                    desktopMd: this.breakpointObserver.isMatched(SCREEN_DESKTOP_MD),
                    desktopLg: this.breakpointObserver.isMatched(SCREEN_DESKTOP_LG),
                    desktopGtSm: this.breakpointObserver.isMatched(SCREEN_DESKTOP_GT_SM),
                };
                return screenMatch;
            }),
        );
    }
}
