import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SelectRequiredDirective } from './template-driven-form/directives/select-required.directive';
import { ConfirmEmailDirective } from './template-driven-form/directives/confirm-email.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    ReactiveFormComponent,
    SelectRequiredDirective,
    ConfirmEmailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
