import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkButton } from './components/link-button/link-button';
import { Input } from './components/input/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkButton, Input, ReactiveFormsModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'login';

  protected form!: FormGroup;
  protected emailField!: any
  protected passwordField!: any


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      emailField: [null, [Validators.required, Validators.email]],
      passwordField: [null, [Validators.required, Validators.minLength(6)]]
    })

    this.emailField = this.form.get('emailField');
    this.passwordField = this.form.get('passwordField');
  }

  protected submit() {
    if(this.form.invalid)return;

    //const emailValue = this.form.get("emailField");
    //const passwordValue = this.form.get("passwordField");
    //console.log(emailValue?.value);
    //console.log(passwordValue?.value);
    //console.log(this.form.getRawValue());
    const {emailField, passwordField} = this.form.getRawValue();
    //console.log(emailField);
    //console.log(passwordField);

    console.log(`Logando usuario... email: ${emailField} password: ${passwordField}`);
  }
}
