import { HttpService } from './../../../utils/http.services';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

interface LoginData {
  email: String;
  password: String;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
 
  public submitted = false;

  constructor(protected router: Router, protected httpService: HttpService) {}

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  public login() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.httpService.postCall('/domain/login', this.loginForm.value).subscribe(
      {
        next: (v) => {
          console.log("next-----------");
          console.log(v);
        },
        error: (e) => {
          console.log("error-----------");
          console.error(e);
        },
        complete: () => {
          console.log("Completed!!!");
        }
      }
    );
  }

  public pageNavigator() {
    this.router.navigate(['/signup']);
  }

  ngOnInit(): void {}
}
