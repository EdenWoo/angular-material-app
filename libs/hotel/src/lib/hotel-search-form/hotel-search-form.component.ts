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
            key: 'propertyType',
            type: 'ama-dropdown-option-select',
            defaultValue: [],
            props: {
                label: 'Property type',
                optionList: [
                    {
                        value: 'Bed and breakfast',
                        label: 'Bed and breakfast',
                    },
                    {
                        label: 'Motels',
                        value: 'Motels',
                    },
                    {
                        value: 'Hostels',
                        label: 'Hostels',
                    },
                    {
                        label: 'Beach hotels',
                        value: 'Beach hotels',
                    },
                    {
                        label: 'Spa hotels',
                        value: 'Spa hotels',
                    },
                    {
                        label: 'Resorts',
                        value: 'Resorts',
                    },
                    {
                        label: 'Inns',
                        value: 'Inns',
                    },
                    {
                        label: 'Other',
                        value: 'Other',
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
