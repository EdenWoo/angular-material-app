import {Component} from '@angular/core';
import {Router} from '@angular/router';

export const NAVIGATION_MENUS = [
    {name: 'Home', link: '/home', icon: 'dashboard'},
    {name: 'Onboarding', link: '/onboarding', icon: 'people'}
];

@Component({
    selector: 'ama-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
    NAVIGATION_MENUS: any = NAVIGATION_MENUS;
    hasSideNav = true;

    constructor(
        private router: Router,
    ) {
    }

    newBlankPage(nav: any) {
        const url = this.router.serializeUrl(this.router.createUrlTree([nav.link]));
        window.open(url, '_blank');
    }
}
