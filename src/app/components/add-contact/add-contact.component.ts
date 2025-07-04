import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

  contactForm: ReturnType<FormBuilder['group']>;
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { 

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.message = 'Please fill in required fields correctly.';
      return;
    }

    const contactData = this.contactForm.value;

    this.http.post('http://localhost:5000/contacts', contactData).subscribe({
      next: (res: any) => {
        this.message = 'Contact added successfully with ID: ' + res.id;
        this.contactForm.reset();
      },
      error: (err) => {
        this.message = err?.error?.error
          ? 'Error: ' + err.error.error
          : 'An unexpected error occurred.';
      }
    });
  }

  goBack() {
    this.router.navigate(['/profile']);
  }
}




/* import { Component } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  imports: [],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss'
})
export class AddContactComponent {

}
 */