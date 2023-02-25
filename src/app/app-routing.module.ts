import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfComponent } from './of/of.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

const routes: Routes = [
  {path:'rxjs-learning',component:RxjsLearningComponent},
  {path:'of',component:OfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
