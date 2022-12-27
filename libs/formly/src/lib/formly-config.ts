import {FORMLY_VALIDATION_MESSAGES} from './formly-validations';
import {addonsExtension} from './addons.extension';
import {FormlyWrapperAddons} from './addons.wrapper';

export const FORMLY_CONFIG = {
    validationMessages: FORMLY_VALIDATION_MESSAGES,
    wrappers: [{name: 'addons', component: FormlyWrapperAddons}],
    extensions: [{name: 'addons', extension: {onPopulate: addonsExtension}}],
}
