import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactListComponent } from './contacts/contact-list/contact-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContactListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'frontend';
}
