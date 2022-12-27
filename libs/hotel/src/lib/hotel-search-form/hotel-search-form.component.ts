import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
    selector: 'ama-hotel-search-form',
    templateUrl: './hotel-search-form.component.html',
    styles: [],
})
export class HotelSearchFormComponent {
    form = new FormGroup({});
    model = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
            fieldGroupClassName: 'gap-4 grid grid-cols-12',
            fieldGroup: [
                {
                    key: 'keyword',
                    type: 'input',
                    className: 'w-full col-span-6',
                    props: {
                        // label: 'Search places, hotel or more',
                        placeholder: 'Search places, hotel or more',
                        appearance: 'outline',
                        addonLeft: {
                            icon: 'search',
                            className: 'mx-2 text-blue-500'
                        },
                    },
                },
            ]
        },
        {
            key: 'Status',
            type: 'menu-select',
            // defaultValue: ['New Lead'],
            props: {
                label: 'Status',
                options: [
                    {
                        key: 'New Lead',
                        label: 'New Lead',
                    },
                    {
                        label: 'Nurture',
                        key: 'Nurture',
                    },
                    {
                        key: 'Appraisal',
                        label: 'Appraisal',
                    },
                    {
                        label: 'Test Drive',
                        key: 'Test Drive',
                    },
                    {
                        label: 'Converted',
                        key: 'Converted',
                    },
                    {
                        label: 'Close Lost',
                        key: 'Close Lost',
                    },
                ],
            },
        },
    ];
}
