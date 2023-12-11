import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

function confirmPassword(password: string, confirm: string) {
    return function (form: AbstractControl) {
        const passwordValue = form.get(password)?.value
        const confirmValue = form.get(confirm)?.value

        if (passwordValue === confirmValue){
            return null;
        }
        return {passwordMissMatch: true}
    }
}

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
  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required,]),
    lastname: new FormControl("", [Validators.required,]),
    password: new FormControl("", [Validators.required,]),
    confirm:new FormControl("", [Validators.required,]),
    phone:new FormControl("", [Validators.required, Validators.pattern('^[0-9]*$')]),
    city:new FormControl(this.states, [Validators.required,]),
  }, [confirmPassword('password','confirm')]
      )
    isSumbmited:boolean = false;


    onSubmit(): void {
    console.log("submit data", this.registerForm.value);
        this.isSumbmited = true;
    }
}
