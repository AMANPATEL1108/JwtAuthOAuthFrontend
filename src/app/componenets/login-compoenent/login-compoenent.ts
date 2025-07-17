import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [HttpClientModule, FormsModule, CommonModule],
  selector: 'app-login',
  templateUrl: './login-compoenent.html',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('jwt_token', res.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Invalid credentials.';
      },
    });
  }
}
