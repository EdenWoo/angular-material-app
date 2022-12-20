import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
    selector: 'ama-home',
    templateUrl: './home.component.html',
    styles: [],
})
export class HomeComponent {
    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
            key: 'Input',
            type: 'input',
            props: {
                label: 'Input',
                placeholder: 'Placeholder',
                description: 'Description',
                required: true,
            },
        },
    ];
}
