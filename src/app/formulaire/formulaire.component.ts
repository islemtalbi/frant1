import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  
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

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.formulaire.valid) {
      console.log(this.formulaire.value);
      // Ici, vous pouvez appeler un service pour soumettre les données.
    } else {
      console.log('Formulaire invalide');
    }
  }
}
