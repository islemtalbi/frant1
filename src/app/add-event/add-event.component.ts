import { Component } from '@angular/core';
import { EventService, CustomEvent } from '../event.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  event: Event = {
    title: '',
    description: '',
    dateHeure: '',
    rappelAvant: 0,
    userId: 1 // Par défaut, un utilisateur ID fixe
  };
  constructor(private eventService: EventService, private router: Router) {}

  onSubmit(): void {
    this.eventService.createEvent(this.event).subscribe(() => {
      alert('Événement ajouté avec succès!');
      this.router.navigate(['/events']); // Redirige vers la liste des événements
    });
  }
}
