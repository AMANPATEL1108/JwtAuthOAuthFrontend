import { Routes } from '@angular/router';
import { Usercompoenent } from './componenets/usercompoenent/usercompoenent';
import { Admincompoenent } from './componenets/admincompoenent/admincompoenent';
import { Accesdenied } from './componenets/accesdenied/accesdenied';
import { RoleGuard } from './auth/role-guard';
import { LoginComponent } from './componenets/login-compoenent/login-compoenent';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'user',
    component: Usercompoenent,
    canActivate: [RoleGuard],
    data: { role: 'USER' },
  },
  {
    path: 'admin',
    component: Admincompoenent,
    canActivate: [RoleGuard],
    data: { role: 'ADMIN' },
  },
  { path: 'access-denied', component: Accesdenied },
  { path: '**', redirectTo: 'login' },
];
