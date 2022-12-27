import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'ama-menu-select',
    templateUrl: './menu-select.component.html',
    styleUrls: ['./menu-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MenuSelectComponent),
            multi: true,
        },
    ],
})
export class MenuSelectComponent implements OnInit, ControlValueAccessor  {
    model: any;
    model$ = new BehaviorSubject({});
    totalCheckedCount = 0
    totalCheckedCountLabel = '';
    displayLabel$ = new BehaviorSubject('');
    selectedLabel = '';
    options: any = [];
    checkedOptions: any = [];
    @Input() props: any;
    private _modelChange: ((value: any) => void) | undefined;
    private _modelTouched: ((value: any) => void) | undefined;

    onClick($event: any) {
        if (this.props.onClick) {
            this.props.onClick($event);
        }
    }

    ngOnInit(): void {
        this.displayLabel$.next(this.props.label);
        this.options = this.props.options;
    }

    // custom form control
    modelChange(model: any) {
        this._modelChange && this._modelChange(model);
        this._modelTouched && this._modelTouched(model);
    }

    registerOnChange(fn: any): void {
        this._modelChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._modelTouched = fn;
    }

    writeValue(obj: any): void {
        console.log(obj);
        if (obj && obj.length > 0) {
            this.model = obj;
            this.model$.next(this.model);

            this.options =
                this.options &&
                this.options.map((v: any) => {
                    if (this.model.indexOf(v.key) > -1) {
                        v.checked = true;
                    }
                    return v;
                });

            this.check();
        }
    }

    // Color menu item click handler
    select($event: any) {
        // this stops the menu from closing
        $event.stopPropagation();
        $event.preventDefault();

        // in this case, the check box is controlled by adding the .selected class
        if ($event.target) {
            $event.target.classList.toggle('selected');
        }

        // add additional selection logic here.
    }

    click($event: any, option: any) {
        // this stops the menu from closing
        $event.stopPropagation();
        $event.preventDefault();

        this.options.find((o: any) => o.key === option.key).checked = !option.checked;
        this.check();
        this.modelChange(this.checkedOptions.map((value: any) => value.key));
    }

    check() {
        this.selectedLabel = '';
        this.totalCheckedCountLabel = '';
        this.checkedOptions = this.options.filter((o: any) => o.checked);
        console.log(this.checkedOptions);
        this.totalCheckedCount = this.checkedOptions.length;

        if (this.totalCheckedCount === 1) {
            this.selectedLabel = this.checkedOptions[0].label;
            this.displayLabel$.next(this.selectedLabel);
        } else if (this.totalCheckedCount > 1 && this.totalCheckedCount < this.options.length) {
            this.selectedLabel = this.checkedOptions[0].label;
            this.totalCheckedCountLabel = '+ ' + (this.totalCheckedCount - 1);
            this.displayLabel$.next(this.selectedLabel + ' ' + this.totalCheckedCountLabel);
        } else if (this.totalCheckedCount > 1 && this.totalCheckedCount === this.options.length) {
            this.selectedLabel = this.checkedOptions[0].label;
            this.displayLabel$.next('All ' + this.props.label);
        } else {
            this.displayLabel$.next(this.props.label);
        }
    }
}
