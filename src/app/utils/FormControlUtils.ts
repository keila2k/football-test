import {FormControl} from '@angular/forms';

export class FormControlUtils {
  static setState(control: FormControl, state: boolean) {
    if (state) {
      control.setErrors({required: true});
    } else {
      control.reset();
    }
  }
}
