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
     
      titre: ['', [Validators.required, Validators.maxLength(100)]], // String
      description: ['', [Validators.required, Validators.maxLength(500)]], // String
      dateheure: [null, [Validators.required]], // LocalDateTime
      rappelavant: [null, [Validators.required]], // Int
      userid: [null, [Validators.required]], // Long
      participants: [[], [Validators.required]] // List
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
