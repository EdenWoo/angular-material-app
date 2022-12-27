import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'ama-menu-select-type',
    templateUrl: './menu-select.type.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class MenuSelectType extends FieldType implements OnInit{
    formControlInput: FormControl | any = this.formControl

    onClick($event: any) {
        if (this['props']['onClick']) {
            this['props']['onClick']($event);
        }
    }

    ngOnInit(){
        this.formControlInput = this.formControl
    }
}
