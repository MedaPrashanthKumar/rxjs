import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { FirstComponent } from './first/first.component';
import { FromComponent } from './from/from.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

const routes: Routes = [
  {path:'rxjs-learning',component:RxjsLearningComponent},
  {path:'of',component:OfComponent},
  {path:'from',component:FromComponent},
  {path:'fromevent',component:FromeventComponent},
  {path:'interval',component:IntervalComponent},
  {path:'debouncetime',component:DebounceTimeComponent},
  {path:'first',component:FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
