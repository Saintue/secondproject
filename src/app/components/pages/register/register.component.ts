import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators, ValidatorFn} from "@angular/forms";

interface RegisterForm extends FormGroup<{
  firstname: FormControl<string>,
  lastname:  FormControl<string>,
  password:  FormControl<string>,
  confirm:  FormControl<string>,
  phone:  FormControl<string>,
  city:  FormControl<string>,
}>{}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  states = [
      {name: "HonkLand"},
      {name: "IronForge"},
      {name: "Sarn"},
      {name: "Oriath"},
      {name: "Stormwind"},
  ]
    registerForm: RegisterForm;
    isSumbmited:boolean = false;

    constructor(private formBuilder: FormBuilder) {
      this.registerForm = this.formBuilder.nonNullable.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        password: ['', Validators.required],
        confirm: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        city: ['', Validators.required],
      }, {
        validators: this.confirmPassword('password','confirm')
      })
    }
  private confirmPassword(password: string, confirm: string): ValidatorFn {
    return  (form: AbstractControl): ValidationErrors | null => {
      const passwordValue = form.get(password)?.value
      const confirmValue = form.get(confirm)?.value
      if (passwordValue === confirmValue){
        return null;
      }
      return {passwordMissMatch: true}
    }
  }

    onSubmit(): void {
        console.log("submit data", this.registerForm.value);
        this.isSumbmited = true;
    }
}

