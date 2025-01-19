import {NgModule} from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeComponent } from './liste/liste.component';
import { ParticipantComponent } from './participant/participant.component';

const routes:Routes=[
  { path: 'ajouter-evenement', component: FormulaireComponent },
  { path: 'liste', component: ListeComponent }
]


  

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]


})
export class AppRoutingModule{}

