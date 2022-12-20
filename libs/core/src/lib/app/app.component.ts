import {Component, OnInit} from '@angular/core';
import {filter, map} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'ama-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private titleService: Title,
    ) {
    }

    ngOnInit() {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.router),
            )
            .subscribe((event) => {
                const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' | ');
                this.titleService.setTitle(title);
            });
    }

    getTitle(state: any, parent: any): any {
        const data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
        }

        if (state && parent) {
            data.push(...this.getTitle(state, state.firstChild(parent)));
        }
        return data;
    }
}
