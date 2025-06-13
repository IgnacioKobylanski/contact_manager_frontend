import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContactListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'frontend';
}
