import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {HomeComponent} from './home/home.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'template-driven',
  component: TemplateDrivenFormComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
