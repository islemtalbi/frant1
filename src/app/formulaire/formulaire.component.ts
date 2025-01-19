import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  
  formulaire: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.formulaire = this.fb.group({
     
      titre: ['', Validators.required],
      description: [''],
      dateheure: ['', Validators.required],
      rappelavant: [null, [Validators.min(0)]],
      userid: [null, [Validators.required, Validators.min(1)]],
      participants: ['']
    });
    
  }

  // Méthode pour soumettre le formulaire
  
  ngOnInit(): void {
    this.formulaire = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      dateheure: ['', Validators.required],
      rappelavant: [null, [Validators.min(0)]],
      userid: [null, Validators.required],
      participants: ['']
    });
  } 
  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.formulaire.valid) {
      console.log(this.formulaire.value);
      // Navigate to another page after successful submission
      this.router.navigate(['/liste ']); // Remplacez '/confirmation' par votre chemin de destination
    } else {
      console.log('Formulaire invalide');
    }
  }
}
