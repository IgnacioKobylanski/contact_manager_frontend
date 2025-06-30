import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


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

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post<any>('http://127.0.0.1:5000/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/contacts']); // o la ruta que uses
      },
      error: () => {
        this.errorMessage = 'Email o contraseña incorrectos.';
      }
    });
  }
}



/* import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
 */