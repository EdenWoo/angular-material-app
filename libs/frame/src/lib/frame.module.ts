import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {FrameComponent} from './frame.component';
import {SimpleHeaderComponent} from './simple-header/simple-header.component';
import {MatTabsModule} from '@angular/material/tabs';
import {SideMenuComponent} from './side-menu/side-menu.component';

@NgModule({
    declarations: [
        FrameComponent,
        SimpleHeaderComponent,
        SideMenuComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatToolbarModule,
        RouterModule,
        MatListModule,
        MatButtonModule,
        MatSidenavModule,
        MatMenuModule,
        MatTooltipModule,
        MatDialogModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatBottomSheetModule,
        MatTabsModule,
    ]
})
export class FrameModule {
}
