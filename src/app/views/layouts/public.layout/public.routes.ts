import { SupportComponent } from './../../public/support/support.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from 'src/app/views/public/register/register.component';
import { LoginComponent } from 'src/app/views/public/login/login.component';

export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: RegisterComponent },
    { path: 'support', component: SupportComponent },
];
