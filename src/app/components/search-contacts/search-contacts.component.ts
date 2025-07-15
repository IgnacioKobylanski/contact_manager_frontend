import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-search-contacts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-contacts.component.html',
  styleUrls: ['./search-contacts.component.scss']
})
export class SearchContactsComponent {
  searchControl = new FormControl('');
  @Output() search = new EventEmitter<string>();


  onSearch() {
    this.search.emit(this.searchControl.value?.trim() || '');
  }
   
}
