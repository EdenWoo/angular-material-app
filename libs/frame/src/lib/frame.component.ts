import {Component, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import {OverlayContainer} from '@angular/cdk/overlay';
import {Router} from '@angular/router';
import {AppFacade, DARK_THEME, ResponsiveService, SidebarStatus, ThemingService} from '@angular-material-app/core';
import {take} from 'rxjs/operators';
import {combineLatest} from 'rxjs';

@Component({
    selector: 'ama-frame',
    templateUrl: './frame.component.html',
    styleUrls: ['./frame.component.scss'],
})
export class FrameComponent implements OnInit {
    isDarkMode = false;
    @Input() sidenavContentMaxWidth: any;
    @Input() simpleHeader: boolean | undefined;
    @Input() hasThemeSwitch: boolean | undefined;
    @HostBinding('class') className = 'dark-theme';
    mode = 'side';
    @ViewChild('sidenav', {static: false})
    sidenav!: MatSidenav;
    opened = false;

    constructor(
        private breakpointObserver: BreakpointObserver,
        public responsiveService: ResponsiveService,
        private overlay: OverlayContainer,
        private themingService: ThemingService,
        private _router: Router,
        public appFacade: AppFacade,
    ) {
    }

    ngOnInit() {

        combineLatest([this.appFacade.sidebarStatus$.pipe(take(1)), this.responsiveService.getScreens()]).subscribe(
            ([sidebarStatus, screenMatch]: any) => {
                if (screenMatch?.phone) {
                    this.opened = false;
                } else if (screenMatch.tablet) {
                    this.opened = false;
                } else if (screenMatch.desktopSm) {
                    this.opened = false;
                } else {
                    if (sidebarStatus === SidebarStatus.Open) {
                        this.opened = true;
                    }
                }
            },
        );
        this.themingService.theme.subscribe((theme: string) => {
            this.className = theme;
            console.log(theme)
            this.isDarkMode = theme === DARK_THEME;
            this.applyThemeOnOverlays();
        });
    }

    toggleMenu() {
        this.opened = !this.opened;
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.className = this.isDarkMode ? 'dark-theme' : '';
        this.applyThemeOnOverlays()
    }

    /**
     * Apply the current theme on components with overlay (e.g. Dropdowns, Dialogs)
     */
    private applyThemeOnOverlays() {
        // for tailwind
        this.className === 'dark-theme' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');

        // remove old theme class and add new theme class
        // we're removing any css class that contains '-theme' string
        const overlayContainerClasses = this.overlay.getContainerElement().classList;
        const themeClassesToRemove: any = Array.from(this.themingService.themes);
        if (themeClassesToRemove.length) {
            overlayContainerClasses.remove(...themeClassesToRemove);
        }
        overlayContainerClasses.add('theme-dark');
    }
}
