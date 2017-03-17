import { FormControl } from '@angular/forms' ;

export class GlobalValidator{

    static mailFormat(control: FormControl): ValidationResult {

        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

    static panFormat(control: FormControl): ValidationResult {

        var PAN_REGEXP = /[a-z]{3}[cphfatblj][a-z]\d{4}[a-z]/i;

        if (control.value != "" && (control.value.length <= 5 || !PAN_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

}

interface ValidationResult {
    [key: string]: boolean;
}