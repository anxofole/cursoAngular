import { Component, OnInit } from '@angular/core';
import {
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return nameRe.test(control.value)
      ? { forbiddenName: { value: control.value } }
      : null;
  };
}

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
})
export class HeroFormComponent {
  public heroForm: FormGroup;
  public states = ['CA', 'MD', 'OH', 'VA'];
  public date = new Date();

  private nameControl: FormControl = new FormControl('', [
    Validators.required,
    forbiddenNameValidator(/bob/i),
  ]);

  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      name: this.nameControl,
      street: '',
      city: '',
      state: '',
      zip: ['00000', Validators.maxLength(5)],
      power: '',
      sidekick: false,
    });
  }

  public get f(): { [key: string]: AbstractControl } {
    return this.heroForm.controls;
  }

  get name() {
    return this.heroForm.get('name');
  }

  public onSubmit(): void {
    console.log(this.heroForm.value);
  }

  public update(): void {
    this.heroForm.setValue({
      name: 'Mr.Heroe',
      street: 'Calle del Sol',
      state: this.states[1],
      zip: 46000,
      power: 'flight',
    });
  }
}
