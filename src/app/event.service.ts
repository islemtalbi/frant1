import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface CustomEvent {
  id?: number;
  title: string;
  description: string;
  dateHeure: string; // Utilisation du format ISO pour LocalDateTime
  rappelAvant: number;
  userId: number;
  participants?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8080/api/events'; // URL de l'API Spring Boot

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);

  
}
}
