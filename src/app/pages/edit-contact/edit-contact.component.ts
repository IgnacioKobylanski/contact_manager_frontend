import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'] 
})
export class EditContactComponent implements OnInit {
  contactId!: number;
  contactForm!: FormGroup;

   saved = false;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: ['']
    });

    this.contactService.getContact(this.contactId).subscribe(contact => {
      this.contactForm.patchValue(contact);
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const updatedContact: Contact = {
        id: this.contactId,
        ...this.contactForm.value
      };

      this.contactService.updateContact(updatedContact).subscribe(response => {
        console.log('Contacto actualizado', response);

        this.saved = true; 
        setTimeout(() => {
          this.saved = false;
        }, 3000);
      });
    }
  }
  goBack() {
    this.router.navigate(['search-contact']);
  }
}