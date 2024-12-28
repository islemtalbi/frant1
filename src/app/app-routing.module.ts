import {NgModule} from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes:Routes=[
{path:"form",component:FormulaireComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]


})
export class AppRoutingModule{}

