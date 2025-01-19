import {NgModule} from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeComponent } from './liste/liste.component';
import { ParticipantComponent } from './participant/participant.component';
import { ListeparticipantComponent } from './listeparticipant/listeparticipant.component';

const routes:Routes=[
  { path: 'liste', component: ListeComponent },
  { path: 'ajouter-evenement', component: FormulaireComponent },
  { path: '', redirectTo: '/liste', pathMatch: 'full' },
]


  

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]


})
export class AppRoutingModule{}

