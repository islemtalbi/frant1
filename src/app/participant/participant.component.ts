import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-participant',
  standalone: true,
  imports: [],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css'
})
export class ParticipantComponent {
  formulaire: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulaire = this.fb.group({
      id_utilisateur: [null, [Validators.required, Validators.min(1)]], // Validator to ensure a positive number
      email: ['', [Validators.required, Validators.email]], // Ensures a valid email format
      password: ['', [Validators.required, Validators.minLength(6)]], // Ensures password is at least 6 characters long
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.formulaire.valid) {
      console.log('Form data:', this.formulaire.value);
      // Here, you can add logic to process the form data, such as sending it to a server
    } else {
      console.log('Form is invalid');
    }
  }

  

};

