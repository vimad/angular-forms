import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

class Person {
  name = '';
  email = '';
  confirmEmail = '';
  gender = null;
  isActive = false;
  country = -1;
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  countries = [{id: 1, name: 'Sri Lanka'} , {id: 2, name: 'India'} , {id: 3, name: 'Italy'}];
  employee = new Person();

  constructor() { }

  ngOnInit(): void {
  }

  submit(empForm: NgForm) {
    console.log(empForm);
  }
}
