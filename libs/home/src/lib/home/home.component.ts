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
        {
            key: 'Select',
            type: 'select',
            props: {
                label: 'Select',
                placeholder: 'Placeholder',
                description: 'Description',
                required: true,
                options: [
                    {value: 1, label: 'Option 1'},
                    {value: 2, label: 'Option 2'},
                    {value: 3, label: 'Option 3'},
                    {value: 4, label: 'Option 4', disabled: true},
                ],
            },
        },
        {
            key: 'select_multi',
            type: 'select',
            props: {
                label: 'Select Multiple',
                placeholder: 'Placeholder',
                description: 'Description',
                required: true,
                multiple: true,
                selectAllOption: 'Select All',
                options: [
                    {value: 1, label: 'Option 1'},
                    {value: 2, label: 'Option 2'},
                    {value: 3, label: 'Option 3'},
                    {value: 4, label: 'Option 4', disabled: true},
                ],
            },
        },
    ];
}
