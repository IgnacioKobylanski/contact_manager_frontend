import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.http.post<any>('http://127.0.0.1:5000/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.authService.login(res.token);
        this.router.navigate(['/profile']);
      },
      error: () => {
        this.errorMessage = 'Email o contraseña incorrectos.';
      }
    });
  }
}