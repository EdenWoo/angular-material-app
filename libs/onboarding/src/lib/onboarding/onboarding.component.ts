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
    model = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
            fieldGroupClassName: 'gap-4 grid grid-cols-12',
            fieldGroup: [
                {
                    key: 'firstName1',
                    type: 'input',
                    className: 'w-full col-span-6',
                    props: {
                        label: 'First Name',
                        placeholder: 'Placeholder',
                        description: 'Description',
                        appearance: 'outline',
                        required: true,
                    },
                },
                {
                    key: 'lastName',
                    type: 'input',
                    className: 'col-span-6',
                    props: {
                        label: 'Last Name',
                        placeholder: 'Placeholder',
                        description: 'Description',
                        appearance: 'outline',
                        required: true,
                    },
                },
                {
                    key: 'Select',
                    type: 'select',
                    className: 'col-span-6',
                    props: {
                        label: 'Department',
                        placeholder: 'Placeholder',
                        description: 'Please select department',
                        required: true,
                        appearance: 'outline',
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
                    className: 'col-span-6',
                    props: {
                        label: 'Manager',
                        placeholder: 'Placeholder',
                        description: 'Description',
                        required: true,
                        multiple: true,
                        selectAllOption: 'Select All',
                        appearance: 'outline',
                        options: [
                            {value: 1, label: 'Option 1'},
                            {value: 2, label: 'Option 2'},
                            {value: 3, label: 'Option 3'},
                            {value: 4, label: 'Option 4', disabled: true},
                        ],
                    },
                },
                {
                    key: 'jobTitle',
                    type: 'input',
                    className: 'col-span-12',
                    props: {
                        label: 'Job Title',
                        placeholder: 'Placeholder',
                        description: 'Description',
                        appearance: 'outline',
                        required: true,
                    },
                },
                {
                    key: 'month',
                    type: 'input',
                    className: 'col-span-4',
                    props: {
                        label: 'Month',
                        placeholder: 'Placeholder',
                        description: 'Description',
                        appearance: 'outline',
                        required: true,
                    },
                },
                {
                    key: 'day',
                    type: 'input',
                    className: 'col-span-4',
                    props: {
                        label: 'Day',
                        placeholder: 'Placeholder',
                        description: 'Description',
                        appearance: 'outline',
                        required: true,
                    },
                },
                {
                    key: 'year',
                    type: 'input',
                    className: 'col-span-4',
                    props: {
                        label: 'Year',
                        placeholder: 'Placeholder',
                        description: 'Description',
                        appearance: 'outline',
                        required: true,
                    },
                },
            ]
        }
    ];
}
