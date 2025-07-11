import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { SearchContactsComponent } from '../../components/search-contacts/search-contacts.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [CommonModule, SearchContactsComponent],
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  allContacts: Contact[] = [];
  results: Contact[] = [];
  searched = false;

  constructor(private router: Router, private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe(data => {
      this.allContacts = data;
      this.results = data;
    });
  }

  onSearch(term: string) {
    this.searched = true;
    if (!term) {
      this.results = [...this.allContacts];
    } else {
      const lowerTerm = term.toLowerCase();
      this.results = this.allContacts.filter(c =>
        c.name.toLowerCase().includes(lowerTerm)
      );
    }
  }

  goBack() {
    this.router.navigate(['/profile']);
  }
}
