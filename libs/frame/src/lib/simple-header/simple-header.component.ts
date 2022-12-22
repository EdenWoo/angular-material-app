import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {filter, map, take} from 'rxjs/operators';
import {BreakpointObserver} from '@angular/cdk/layout';
import {FormControl} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DOCUMENT} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {SCREEN_SM_MAX, THEME_KEY, ThemingService} from '@angular-material-app/core';

@Component({
    selector: 'ama-simple-header',
    templateUrl: './simple-header.component.html',
    styleUrls: ['./simple-header.component.scss'],
    animations: [
        trigger('rotatedState', [
            state('default', style({transform: 'rotate(-180deg)'})),
            state('rotated', style({transform: 'rotate(0deg)'})),
            transition('rotated => default', animate('250ms ease-out')),
            transition('default => rotated', animate('250ms ease-in')),
        ]),
    ],
})
export class SimpleHeaderComponent implements OnInit {
    state = 'default';
    toggleControl = new FormControl(false);
    @Input() isDarkMode = false;
    @Input() hasThemeSwitch: any;
    @Input() sidenav: MatSidenav | undefined;
    @Output() darkModeActivate = new EventEmitter();
    @Output() toggle = new EventEmitter();

    isMobile$ = this.breakpointObserver.observe(`(max-width: ${SCREEN_SM_MAX}px)`).pipe(map((breakpoint) => breakpoint.matches));

    constructor(
        private breakpointObserver: BreakpointObserver,
        private themingService: ThemingService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        @Inject(DOCUMENT) private doc: Document,
    ) {
    }

    ngOnInit(): void {
        // turn toggle on if dark theme
        this.themingService.theme
            .pipe(
                filter((v) => !!v),
                take(1),
            )
            .subscribe((theme) => {
                this.isDarkMode = theme === 'dark-theme';
            });
        this.toggleControl.valueChanges.subscribe((isDarkMode) => {
            this.darkModeActivate.emit(isDarkMode);
        });
    }

    toggleTheme(isDarkMode: boolean) {
        this.state = this.state === 'default' ? 'rotated' : 'default';
        localStorage.setItem(THEME_KEY, isDarkMode ? 'dark-theme' : 'light-theme');
        this.darkModeActivate.emit(isDarkMode);
        this.isDarkMode = isDarkMode;
    }
}
