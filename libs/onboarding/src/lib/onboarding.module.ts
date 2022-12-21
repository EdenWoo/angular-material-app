import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {OnboardingComponent} from './onboarding/onboarding.component';
import {OnboardingRoutingModule} from './onboarding-routing.module';

@NgModule({
    imports: [
        CommonModule,
        OnboardingRoutingModule,
        ReactiveFormsModule,
        FormlyMaterialModule,
        FormlyModule,
    ],
    declarations: [OnboardingComponent]
})
export class OnboardingModule {
}
