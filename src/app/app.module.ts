import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
