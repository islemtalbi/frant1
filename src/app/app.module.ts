import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventFormComponent } from './event-form/event-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component'; // Assurez-vous que ce composant existe


const routes: Routes = [
    { path: 'events', component: EventListComponent }, // Route définie pour 'events'
    { path: '', redirectTo: '/events', pathMatch: 'full' }, // Redirection par défaut
    { path: '**', redirectTo: '/events' } // Gérer les URL inconnues
  ];

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent ,// Ajouter le composant EventForm
    EventListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Nécessaire pour les formulaires
  ],
  providers: [],
  bootstrap: [AppComponent] // Point d'entrée principal
})
export class AppModule { }
