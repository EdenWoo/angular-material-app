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
                            className: 'mx-2 text-primary'
                        },
                    },
                },
                {
                    key: 'dateFrom',
                    type: 'datepicker',
                    className: 'col-span-2',
                    props: {
                        appearance: 'outline',
                        placeholder: 'Date From',
                    },
                },
                {
                    key: 'dateTo',
                    type: 'datepicker',
                    className: 'col-span-2',
                    props: {
                        appearance: 'outline',
                        placeholder: 'Date To',
                    },
                },
                {
                    key: 'type',
                    type: 'ama-horizontal-tab-select',
                    className: 'col-span-3',
                    props: {
                        appearance: 'outline',
                        placeholder: 'Date To',
                        optionList: [{
                            icon: 'hotel',
                            label: 'hotel',
                            value: 'Hotel'
                        }, {
                            icon: 'holiday_village',
                            label: 'Hotel Rentals',
                            value: 'Hotel Rentals'
                        }]
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
                        icon: 'house',
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
                        icon: 'sell',
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
                {
                    key: 'hotelClass',
                    type: 'ama-dropdown-option-select',
                    defaultValue: [],
                    props: {
                        label: 'Hotel Class',
                        panelClassName: 'w-[500px]',
                        icon: 'stars',
                        optionList: [
                            {
                                value: '2-star',
                                label: '2-star',
                            },
                            {
                                value: '3-star',
                                label: '3-star',
                            },
                            {
                                value: '4-star',
                                label: '4-star',
                            },
                            {
                                value: '5-star',
                                label: '6-star',
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
