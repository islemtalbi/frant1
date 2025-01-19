import { Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeComponent } from './liste/liste.component';
export const routes: Routes = [
    { path: 'liste', component: ListeComponent },
    { path: 'ajouter-evenement', component: FormulaireComponent },
    { path: '', redirectTo: '/ajouter-evenement', pathMatch: 'full' },
];
