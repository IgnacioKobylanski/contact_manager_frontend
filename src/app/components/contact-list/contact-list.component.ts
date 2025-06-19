import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  contacts = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', phone: '123456789' },
    { id: 2, name: 'María López', email: 'maria@example.com', phone: '987654321' }
  ];
}
