import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'contacts', pathMatch: 'full' },
      { path: 'contacts', component: ContactListComponent }
    ]
  }
];
