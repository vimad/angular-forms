import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  empForm: FormGroup;

  countries = [{id: 1, name: 'Sri Lanka'} , {id: 2, name: 'India'} , {id: 3, name: 'Italy'}];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.empForm = this.fb.group({
      name: ['', Validators.required],
      email: '',
      confirmEmail: '',
      gender: '',
      isActive: false,
      country: -1
    });
  }

  submit() {

  }
}
