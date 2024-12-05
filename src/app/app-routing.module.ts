import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
const routes: Routes = [
  { path: 'create',component: EventFormComponent},
  { path: 'events', component: EventListComponent }, // Route pour la liste des événements
  { path: '', redirectTo: '/events', pathMatch: 'full' }, // Route par défaut
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  
})
export class AppRoutingModule { }
