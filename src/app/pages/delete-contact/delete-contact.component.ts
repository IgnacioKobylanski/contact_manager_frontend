import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-contact',
  imports: [CommonModule],
  templateUrl: './delete-contact.component.html',
  styleUrl: './delete-contact.component.scss'
})
export class DeleteContactComponent implements OnInit {
  contacts: Contact[] = [];
  loading = false;
  error = '';
  message = '';

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.loading = true;
    this.contactService.getContacts().subscribe({
      next: (data) => {
        this.contacts = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load contacts.';
        this.loading = false;
      }
    });
  }

  deleteContact(id: number) {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(id).subscribe({
        next: () => {
          this.contacts = this.contacts.filter(c => c.id !== id);
          this.message = 'User deleted successfully'; 
          setTimeout(() => {
            this.message = '';  
          }, 3000);
        },
        error: () => alert('Error deleting contact.')
      });
    }
  }

  goBack() {
    this.router.navigate(['profile']);
  }
}
