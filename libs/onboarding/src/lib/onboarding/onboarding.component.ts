import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
    selector: 'ama-home',
    templateUrl: './onboarding.component.html',
    styles: [],
})
export class OnboardingComponent {
    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
            fieldGroupClassName: 'grid gap-4 grid-cols-4',
            fieldGroup: [
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.formstack.com%2Ftemplates%2Fnew-employee-it-checklist&psig=AOvVaw2llYDhRgngg-Z2YcSM2HqW&ust=1671624242817000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDAttuTiPwCFQAAAAAdAAAAABAE
                {
                    key: 'firstName1',
                    type: 'input',
                    className: 'w-full',
                    // fieldGroupClassName: 'w-full',
                    props: {
                        // attributes: {
                        //     class: 'w-full',
                        // },
                        label: 'First Name',
                        placeholder: 'Placeholder',
                        description: 'Description',
                        required: true,
                    },
                },
                {
                    key: 'lastName',
                    type: 'input',
                    props: {
                        label: 'Last Name',
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
            ]
        }
    ];
}
