import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
    selector: 'ama-hotel-search-form',
    templateUrl: './hotel-search-form.component.html',
    styles: [],
})
export class HotelSearchFormComponent implements OnInit {

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
            type: 'ama-select',
            defaultValue: ['New Lead', 'Nurture'],
            props: {
                label: 'Status',
                optionList: [
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

    ngOnInit(): void {
        this.form.valueChanges.subscribe(value => {
            console.log(value)
        })
    }
}
