import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { DeleteContactComponent } from './pages/delete-contact/delete-contact.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'add-contact', component: AddContactComponent },
      { path: 'search-contact', component: ContactsPageComponent },
      { path: 'contacts/edit/:id', component:EditContactComponent},
      { path: 'delete-contact', component:DeleteContactComponent},
    ]
  },
  { path: '**', redirectTo: 'login' } 
];