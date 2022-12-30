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
                    className: 'col-span-4',
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
            fieldGroupClassName: 'flex gap-4',
            fieldGroup: [
                {
                    key: 'propertyType',
                    type: 'ama-dropdown-option-select',
                    defaultValue: [],
                    props: {
                        label: 'Property type',
                        panelClassName: 'w-[500px]',
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
                {
                    key: 'sortBy',
                    type: 'ama-dropdown-option-select',
                    defaultValue: [],
                    props: {
                        label: 'Sort By',
                        panelClassName: 'w-[500px]',
                        optionList: [
                            {
                                value: 'Relevance',
                                label: 'Relevance',
                            },
                            {
                                label: 'Lowest price',
                                value: 'Lowest price',
                            },
                            {
                                value: 'Highest Price',
                                label: 'Highest Price',
                            },
                            {
                                label: 'Most viewed',
                                value: 'Most viewed',
                            },
                        ],
                    },
                },
                {
                    key: 'offers',
                    type: 'ama-dropdown-option-select',
                    defaultValue: [],
                    props: {
                        label: 'Offers',
                        panelClassName: 'w-[500px]',
                        optionList: [
                            {
                                value: 'Free cancellation',
                                label: 'Free cancellation',
                            },
                            {
                                label: 'COVID-19-responder rooms',
                                value: 'COVID-19-responder rooms',
                            },
                            {
                                value: 'Special offers',
                                label: 'Special offers',
                            },
                        ],
                    },
                },
            ]
        },
    ];

    ngOnInit(): void {
        this.form.valueChanges.subscribe(value => {
            console.log(value)
        })
    }
}
