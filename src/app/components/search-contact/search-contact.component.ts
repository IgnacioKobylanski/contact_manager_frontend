import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.scss']
})
export class SearchContactComponent {
  searchControl = new FormControl('');
}
