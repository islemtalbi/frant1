import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events = [
    {
      id: '1',
      title: 'Anniversaire de Jean',
      description: 'Célébration de l anniversaire de Jean.',
      date: '2024-12-10',
      time: '18:00'
    },
    {
      id: '2',
      title: 'Réunion d\'équipe',
      description: 'Réunion hebdomadaire avec l équipe de projet.',
      date: '2024-12-15',
      time: '09:00'
    },
    {
      id: '3',
      title: 'Concert',
      description: 'Concert de musique classique au théâtre.',
      date: '2024-12-20',
      time: '20:00'
    }
  ];

}
