import {NgModule} from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeComponent } from './liste/liste.component';
const routes:Routes=[
  { path: 'ajouter-evenement', component: FormulaireComponent },
  { path: 'modifier-evenement/:id', component: FormulaireComponent },
  { path: 'evenements', component: ListeComponent }, // Page de la liste des événements
  { path: '', redirectTo: '/evenements', pathMatch: 'full' },
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]


})
export class AppRoutingModule{}

