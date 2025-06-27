import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'contacts', component: ContactListComponent }, 
    ]
  },
  { path: '**', redirectTo: 'login' } 
];