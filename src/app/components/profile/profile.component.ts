import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OptionComponent } from '../option/option.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, OptionComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private router: Router) {}

  addContact() {
    this.router.navigate(['/add-contact']);
  }

  searchContact() {
    this.router.navigate(['/search-contact']);
  }

  deleteContact() {
    this.router.navigate(['/delete-contact']);
  }
}
