import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';  // Importer la fonction pour générer des UUID

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  // Modèle pour l'événement avec un ID unique
  event = {
    id: '',  // L'ID sera généré automatiquement
    title: '',
    description: '',
    date: '',
    time: ''
  };
  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    // Générer un UUID unique
    this.event.id = uuidv4();  // Exemple : ID basé sur un UUID

    console.log('Événement ajouté:', this.event);
    // Vous pouvez envoyer l'événement à un service pour le sauvegarder
    // Exemple : this.eventService.addEvent(this.event);
  }

}
