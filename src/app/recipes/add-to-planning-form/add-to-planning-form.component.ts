import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-to-planning-form',
  templateUrl: './add-to-planning-form.component.html',
  styleUrls: ['./add-to-planning-form.component.scss']
})
export class AddToPlanningFormComponent implements OnInit {
  addToPlanningForm: FormGroup;

  selectedDays: string = "Lundi";
  selectedMomentsDay: string = "Matin";
  days = [
    'Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'
  ]
  momentsDay = [
    'Matin','Midi','Soir'
  ]


  
  constructor() {
    this.addToPlanningForm = new FormGroup({});
  
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addToPlanningForm = new FormGroup({
      day: new FormControl('Lundi', [Validators.required]),
      momentDay: new FormControl('Matin', [Validators.required]),
      personNbr: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){}

}
